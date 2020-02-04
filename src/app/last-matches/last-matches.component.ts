import { Component, OnInit } from '@angular/core';
import {PlayerEntity} from '../entity/PlayerEntity';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';
import {MatchService} from '../match.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-last-matches',
  templateUrl: './last-matches.component.html',
  styleUrls: ['./last-matches.component.css']
})
export class LastMatchesComponent implements OnInit {

  results: any[];

  constructor(private activatedRoute: ActivatedRoute,
              private matchService: MatchService) {
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        matchService.results(id).subscribe((
          data: object[]) => {
            this.results = data;
          }
        );
      }
    )
  }

  ngOnInit() {
  }

}
