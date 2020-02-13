import { Component, OnInit } from '@angular/core';
import {MatchService} from "../match.service";
import {StyleService} from "../style.service";
import {FileService} from '../file-service.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches: any[];

  constructor(private matchService: MatchService,
              public styleService: StyleService,
              public fileService: FileService) {
    matchService.matches().subscribe((
      data: any) => {
        this.matches = data;
      }
    );
  }

  ngOnInit() {
  }

}
