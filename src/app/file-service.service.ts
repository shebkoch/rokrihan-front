import { Injectable } from '@angular/core';
import {MatchService} from './match.service';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  static data;

  constructor(private matchService : MatchService,
              private sanitizer: DomSanitizer) {

  }
  public init(id){
    this.matchService.allMates(id).subscribe(
      x=>{
        FileService.data = x;
        localStorage.setItem('teamData', JSON.stringify(x));
      }
    );
  }
  public getAvatar(id: number) {
    if(FileService.data == undefined) FileService.data = JSON.parse(localStorage.getItem('teamData'));
    for(let info of FileService.data){
      if(info.playerEntity.id == id) {
        let objectURL = 'data:image/jpeg;base64,' + info.playerInfoEntity.avatar;
        return this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    }
  }
}
