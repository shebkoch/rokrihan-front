import {Component, Input, OnInit} from '@angular/core';
import {PlayerEntity} from '../entity/PlayerEntity';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';
import {FactionEntity} from '../entity/FactionEntity';
import {dateNames} from '../utils';
import {StyleService} from '../style.service';

@Component({
  selector: 'app-result-row',
  templateUrl: './result-row.component.html',
  styleUrls: ['./result-row.component.css']
})
export class ResultRowComponent implements OnInit {
  @Input() public result = new PlayerResultEntity();
  @Input() public matchInfo: boolean = true;

  @Input() public agoWidth;
  @Input() public durWidth;
  @Input() public winWidth;
  @Input() public factionWidth;

  constructor( public styleService : StyleService) { }

  ngOnInit() {
  }

  public scoreWidth() {
    if (this.result == null) { return 0; }
    return this.result.score / this.result.matchEntity.winnerScore * 100;
  }
  public maxScoreWidth() {
    return 100 - this.scoreWidth();
  }
  public imagePath(faction: FactionEntity) {
    if (faction == null) { return null; }
    return this.styleService.getImagePath(faction);
  }

  public duration() : string{
    let ctime = this.result.matchEntity.ctime;
    let etime = this.result.matchEntity.etime;

    let msec = etime - ctime;
    let min = msec / 1000 / 60;
    // if (min < 120)
    return String(Math.round(min)) + ' мин';
    // else return String(Math.round(min / 60)) + ' ч.';
  }
  public lastTime(time: number) {
    let now = Date.now();
    let min = (now - time) / 1000 / 60;
    let posfix = ' назад';
    if (min < 60) return dateNames(Math.round(min), 'minutes', posfix);
    let hours = min / 60;
    if(hours < 24) return dateNames(Math.round(hours),'hours', posfix);
    let days = hours / 24;
    if (days < 365) return dateNames(Math.round(days), 'days', posfix);
    return dateNames(Math.round(days/365), 'years', posfix);
  }
}
