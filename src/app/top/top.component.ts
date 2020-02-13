import {Component, OnInit} from '@angular/core';
import {MatchService} from '../match.service';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';
import {FormControl} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {FactionEntity} from '../entity/FactionEntity';
import {StyleService} from '../style.service';
import {DomSanitizer} from '@angular/platform-browser';
import {FileService} from '../file-service.service';
import {DeviceDetectorService} from 'ngx-device-detector';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  public dataSource = new MatTableDataSource<any>();
  public displayedColumns;
  players: any[];

  constructor(private matchService: MatchService,
              private styleService: StyleService,
              private fileService: FileService,
              private deviceDetectorService: DeviceDetectorService ) {
    if (deviceDetectorService.isMobile())
      this.displayedColumns = ['place', 'player', 'mmr', 'win', 'match'];
    else
      this.displayedColumns = ['place', 'player', 'mmr', 'win', 'match', 'best'];

    matchService.players().subscribe((
      data: object[]) => {
        this.players = data;
        this.dataSource.data =data;
      }

  );
  }

  public dropdown() {
    let data = JSON.parse(localStorage.getItem('teamData'));
    let list = [];

  }

  public getAvatar(player) {
    return this.fileService.getAvatar(player.id);
  }

  public getColor(faction: FactionEntity) {
    if (faction == null) {
      return null;
    }
    return this.styleService.getColor(faction);
  }

  ngOnInit() {
  }
}
