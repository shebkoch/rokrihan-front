import {Component, OnInit} from '@angular/core';
import {PlayerEntity} from '../entity/PlayerEntity';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';
import {MatchService} from '../match.service';
import {StyleService} from '../style.service';
import {idByLogin} from '../utils';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {FileService} from '../file-service.service';


@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  public player: PlayerEntity;
  public lastResult: PlayerResultEntity = null;
  public img: any;
  constructor(private activatedRoute: ActivatedRoute,
              private matchService: MatchService,
              public styleService : StyleService,
              private sanitizer: DomSanitizer,
              private fileService: FileService
              ) {
    // this.sss = 'sasasa';

    this.activatedRoute.params.subscribe(
      params => {
        localStorage.setItem('login', 'shebup');
        let id = params['id'];
        let login = params['login'];
        if(id == null && login == null){
          login = localStorage.getItem('login');
        }
        if(login != null){

          id = idByLogin(login);
        }
        if (id != null) {
          fileService.init(id);
          matchService.lastPlayerResult(id).subscribe((
            data: PlayerResultEntity) => {
              this.lastResult = data;
            }
          );
          matchService.player(id).subscribe((
            data: PlayerEntity) => {
              this.player = data;
              this.getAvatar();

            }
          );
        }
      }
    )

    // this.player = new PlayerEntity();
    // this.player.name = 'Саня';
    // this.player.mmr = 1890;
    // this.player.matchCount = 8;
    // this.player.winCount = 2;
  }

  ngOnInit() {

  }
  public getAvatar(){
    return this.matchService.playerInfo(this.player.id).subscribe(blob => {
      // @ts-ignore
      let objectURL = 'data:image/jpeg;base64,' + blob.avatar;
      this.img = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    });
  }
  get winPercent(): number {
    if (this.player.matchCount == 0) { return 0; }
    return this.player.winCount / this.player.matchCount * 100;
  }
}
