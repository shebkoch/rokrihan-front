import { Injectable } from '@angular/core';
import {FactionEntity} from './entity/FactionEntity';
import {PlayerEntity} from './entity/PlayerEntity';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }

  public getImagePath(faction: FactionEntity): string {
    return `assets/img/faction/${faction.id}.png`;
  }
  public getColor(faction: FactionEntity){
    if(faction == null) return null;
    switch (faction.name) {
      case 'Механический орден': return  '#de2d41';
      case 'Лесное единство': return  '#9ac43e';
      case 'Сумеречная стая': return  '#00919c';
      case 'Ползучий клан': return  '#ffd641';
    }
  }


}
