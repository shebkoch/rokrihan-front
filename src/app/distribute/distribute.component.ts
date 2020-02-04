import {Component, OnInit} from '@angular/core';
import {MatchService} from '../match.service';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {StyleService} from '../style.service';
import {FactionEntity} from '../entity/FactionEntity';
import {DistributeData} from '../entity/DistributeData';
import {PlayerEntity} from '../entity/PlayerEntity';
import {idByLogin} from "../utils";
import {MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-distribute',
  templateUrl: './distribute.component.html',
  styleUrls: ['./distribute.component.css']
})
export class DistributeComponent implements OnInit {

  private _factions: any[];
  private _players: any[];

  private _allFactions: boolean;
  private _allPlayers: boolean;

  public generated = false;
  public isStart = false;
  public canView = false;

  data: any;
  postData: any;
  ctime: number;
  img;
  selected : DistributeData;
  constructor(private matchService: MatchService,
              private styleService: StyleService,
              private sanitizer: DomSanitizer) {
    matchService.factions().subscribe((
      data: any) => {
        this._factions = data;
        this.allFactions = true;
      }
    );
    matchService.players().subscribe((
      data: any) => {
        this._players = data;
        this.allPlayers = false;
      }
    );
    let login = localStorage.getItem('login');
    if(idByLogin(login) == 1) this.canView = true;
  }

  public submit() {
    const selectedFactions = this._factions.filter((x) => x.checked);
    const selectedPlayers = this._players.filter((x) => x.checked);

    this.selected = new DistributeData();
    this.selected.factions = selectedFactions;
    this.selected.players = selectedPlayers;
    this.distribute()
  }
  public reroll(){
    this.distribute()
  }
  public distribute(){
    this.matchService.distribute(this.selected).subscribe((
      data: any) => {
        this.generated = true;
        this.data = data;
      }
    );
  }

  public getColor(faction: FactionEntity) {
    return this.styleService.getColor(faction);
  }

  getAvatar(player: PlayerEntity) {
    return this.matchService.playerInfo(player.id).subscribe(blob => {
      // @ts-ignore
      let objectURL = 'data:image/jpeg;base64,' + blob.avatar;
      this.img = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }

  getImg(faction: FactionEntity) {
    return this.styleService.getImagePath(faction);
  }

  get allFactions(): boolean {
    return this._allFactions;
  }

  get allPlayers(): boolean {
    return this._allPlayers;
  }

  set allPlayers(value: boolean) {
    if (value && this._players != null) {
      for (let player of this._players) {
        player.checked = true;
      }
    }
    this._allPlayers = value;
  }

  get factions(): any[] {
    for (let faction of this._factions) {
      if (faction.checked != true) {
        this.allFactions = false;
      }
    }
    return this._factions;
  }

  set factions(value: any[]) {
    this._factions = value;
    for (let faction of this._factions) {
      if (faction.checked != true) {
        this.allFactions = false;
      }
    }
  }

  set allFactions(value: boolean) {
    if (value && this._factions != null) {
      for (let faction of this._factions) {
        faction.checked = true;
      }
    }
    this._allFactions = value;
  }


  get players(): any[] {
    for (let player of this._players) {
      if (player.checked != true) {
        this.allPlayers = false;
      }
    }
    return this._players;
  }

  set players(value: any[]) {
    for (let player of this._players) {
      if (player.checked != true) {
        this.allPlayers = false;
      }
    }
    this._players = value;
  }

  ngOnInit() {
  }

  start() {
    this.ctime = Date.now();
    this.isStart = true;
  }
  public end(){
    this.postData = {};
    this.postData.matchEntity = {};
    this.postData.matchEntity.ctime = this.ctime;
    this.postData.matchEntity.etime = Date.now();
    this.postData.matchEntity.rating = true;

    this.postData.playerResultEntities = [];
    for (let i = 0; i < this.data.length; i++) {
      let item = this.data[i];
      let entity: any = {};
      entity.playerId = item.key.id;
      entity.faction1Id = item.value.factionEntity1.id;
      entity.faction2Id = item.value.factionEntity2.id;
      entity.score = item.score;
      entity.winner = item.checked;
      if(entity.winner == null)entity.winner = false;

      this.postData.playerResultEntities.push(entity);
    }
    this.matchService.start(true,this.postData).subscribe((
      data: any) => {
        console.log(data);
      }
    );
    this.isStart = false;
    this.generated = false;
  }
}
