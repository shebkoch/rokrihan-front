import {Component, Input, OnInit} from '@angular/core';
import {PlayerEntity} from '../entity/PlayerEntity';
import {StyleService} from '../style.service';
import {FactionEntity} from '../entity/FactionEntity';
import {DomSanitizer} from '@angular/platform-browser';
import {MatchService} from '../match.service';
import {FileService} from '../file-service.service';

@Component({
  selector: 'app-player-row',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.css']
})
export class PlayerRowComponent implements OnInit {
  @Input() place: number;
  @Input() player: PlayerEntity;
  img;

  constructor(private styleService: StyleService,
              private sanitizer: DomSanitizer,
              private fileService: FileService) {
  }

  ngOnInit() {
  }

  public getAvatar(){
    return this.fileService.getAvatar(this.player.id);
  }

  public getColor(faction: FactionEntity) {
    if (faction == null) {
      return null;
    }
    return this.styleService.getColor(faction);
  }

}
