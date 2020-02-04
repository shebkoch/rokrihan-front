import { Component, OnInit } from '@angular/core';
import {idByLogin} from "../utils";
import {log} from "util";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  public a = 'bla';
  constructor() { }

  ngOnInit() {
  }
  getPlayer(){
    let login = localStorage.getItem('login');
    return idByLogin(login);
  }
}
