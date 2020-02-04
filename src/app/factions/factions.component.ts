import {Component, OnInit, ViewChild} from '@angular/core';
import {MatchService} from '../match.service';
import {PlayerResultEntity} from '../entity/PlayerResultEntity';
import {StyleService} from '../style.service';
import {FactionEntity} from '../entity/FactionEntity';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.css']
})
export class FactionsComponent implements OnInit {

  public factions: any[];
  public dataSource = new MatTableDataSource<any>();
  public displayedColumns = ['name', 'matchCount', 'winCount', 'score'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private matchService : MatchService,
              private styleService: StyleService) {
      matchService.factions().subscribe((
        data: any) => {
          this.factions = data;
          this.dataSource.data = this.factions;
        }
      );
  }
  getColor(faction: FactionEntity){
    return this.styleService.getColor(faction);
  }
  ngOnInit() {
    this.dataSource.sort = this.sort
  }

}
