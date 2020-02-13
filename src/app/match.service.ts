import { Injectable } from '@angular/core';
import {PlayerResultEntity} from './entity/PlayerResultEntity';
import {PlayerEntity} from './entity/PlayerEntity';
import {MatchEntity} from './entity/MatchEntity';
import {FactionEntity} from './entity/FactionEntity';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
   serverUrl = 'http://151.248.125.142:8080/rokrihan/';
  // serverUrl = 'http://localhost:8080/';
  lastPlayerResultUrl = this.serverUrl+'last_info/';
  resultsUrl = this.serverUrl + 'results/';
  playersUrl = this.serverUrl+'players/';
  playerUrl = this.serverUrl+'player/';
  playerInfoUrl = '/info';
  matchUrl = this.serverUrl+'match/';
  matchesUrl = this.serverUrl+'matches/';
  factionsUrl = this.serverUrl+'factions';
  distributeUrl = this.serverUrl+'distribute';
  startUrl = this.serverUrl+'match/';
  mates_url = '/all_mates/';
  best_in_team = this.serverUrl + 'best/in/team/';
  httpHeaders:HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.httpHeaders.append("Authorization", "Basic " + btoa("Test:123"));
    // TODO
  }
  public results(id) : Observable<object>{
    return this.http.get(this.resultsUrl+id, {headers : this.httpHeaders});
  }
  public players() : Observable<object>{
    return this.http.get(this.playersUrl, {headers : this.httpHeaders});
  }
  public player(id) : Observable<object>{
    return this.http.get(this.playerUrl+id, {headers : this.httpHeaders});
  }
  public playerInfo(id) : Observable<object>{
    return this.http.get(this.playerUrl+id+this.playerInfoUrl, {headers : this.httpHeaders});
  }

  public lastPlayerResult(id): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic 0KHQsNC90Y86MDZlNzQ3N2U2ZjU0YTk1YmJhMTgxNzc0MDRmOTM1YTM='
      })
    };


    return this.http.get(this.lastPlayerResultUrl+id, httpOptions);
  }
  public match(id) : Observable<object>{
    return this.http.get(this.matchUrl+id, {headers : this.httpHeaders});
  }
  public matches() : Observable<object>{
    return this.http.get(this.matchesUrl, {headers : this.httpHeaders});
  }
  public factions() : Observable<object>{
    return this.http.get(this.factionsUrl, {headers : this.httpHeaders});
  }

  public distribute(data:any) : Observable<object>{
    return this.http.post(this.distributeUrl, data);
  }
  public start(isEnd:boolean, data:any) : Observable<object>{
    return this.http.post(this.startUrl, data);
  }
  public allMates(id) {
    return this.http.get(this.playerUrl+id+this.mates_url);
  }
  public bestInTeam(id) {
    return this.http.get(this.best_in_team+id);
  }
}
