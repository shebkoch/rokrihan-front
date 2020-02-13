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

  public dataSource = new MatTableDataSource<any>();
  public displayedColumns = ['name', 'matchCount', 'winCount', 'score'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private matchService : MatchService,
              private styleService: StyleService) {
      matchService.factions().subscribe((
        data: any) => {
          let factions = [];
          for(let factCombo of data){
            factions.push(factCombo.factionEntity1);
            factions.push(factCombo.factionEntity2);
          }
          this.dataSource.data = factions;
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
