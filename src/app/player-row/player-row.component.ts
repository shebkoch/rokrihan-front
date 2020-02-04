import {Component, Input, OnInit} from '@angular/core';
import {PlayerEntity} from '../entity/PlayerEntity';
import {StyleService} from '../style.service';
import {FactionEntity} from '../entity/FactionEntity';

@Component({
  selector: 'app-player-row',
  templateUrl: './player-row.component.html',
  styleUrls: ['./player-row.component.css']
})
export class PlayerRowComponent implements OnInit {
  @Input() place : number;
  @Input() player: PlayerEntity;
  constructor(private styleService: StyleService) { }

  ngOnInit() {
  }
  public getAvatar(){
    return this.styleService.getAvatar(this.player);
  }
  public getColor(faction: FactionEntity){
    if(faction == null){
      return null;
    }
    return this.styleService.getColor(faction);
  }

}
