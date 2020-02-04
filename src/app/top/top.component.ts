import { Component, OnInit } from '@angular/core';
import {MatchService} from '../match.service';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  players : any[];
  constructor(private matchService: MatchService) {
    matchService.players().subscribe((
      data: object[]) => {
        this.players = data;
      }
    );
  }

  ngOnInit() {
  }
}
