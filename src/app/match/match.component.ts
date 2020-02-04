import { Component, OnInit } from '@angular/core';
import {MatchEntity} from '../entity/MatchEntity';
import {MatchService} from '../match.service';
import {ActivatedRoute} from '@angular/router';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';
import {PlayerEntity} from '../entity/PlayerEntity';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  public match: MatchEntity;
  public results: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private matchService : MatchService) {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        matchService.match(id).subscribe((
          data: any) => {
            this.match = data.matchEntity;
            this.results = data.playerResultEntities;
          }
        );
      }
    )
  }
  ngOnInit() {
  }

}
