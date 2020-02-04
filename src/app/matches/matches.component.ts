import { Component, OnInit } from '@angular/core';
import {MatchService} from "../match.service";
import {StyleService} from "../style.service";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any[];

  constructor(private matchService: MatchService,
              public styleService: StyleService) {
    matchService.matches().subscribe((
      data: any) => {
        this.matches = data;
      }
    );
  }

  ngOnInit() {
  }

}
