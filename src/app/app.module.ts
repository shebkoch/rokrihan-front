import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PlayerComponent} from './player/player.component';
import {PlayerInfoComponent} from './player-info/player-info.component';
import {TopComponent} from './top/top.component';
import {LastMatchesComponent} from './last-matches/last-matches.component';
import {RouterModule} from '@angular/router';
import {TopBarComponent} from './top-bar/top-bar.component';
import {ResultRowComponent} from './result-row/result-row.component';
import {HttpClientModule} from '@angular/common/http';
import {PlayerRowComponent} from './player-row/player-row.component';
import {MatchesComponent} from './matches/matches.component';
import {MatchComponent} from './match/match.component';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { DistributeComponent } from './distribute/distribute.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FactionsComponent } from './factions/factions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule,
  MatSortModule, MatTableModule
} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import {DeviceDetectorModule} from 'ngx-device-detector';
registerLocaleData(localeRu, 'ru');
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerInfoComponent,
    TopComponent,
    LastMatchesComponent,
    TopBarComponent,
    ResultRowComponent,
    PlayerRowComponent,
    MatchesComponent,
    MatchComponent,
    DistributeComponent,
    FactionsComponent,
    RegisterComponent,
  ],
  exports:[
    MatSortModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      {path: 'player/:id', component: PlayerInfoComponent},
      {path: 'login/:login', component: PlayerInfoComponent},
      {path: 'match/:id', component: MatchComponent},
      {path: 'play', component: DistributeComponent},
      {path: 'factions', component: FactionsComponent},
      {path: 'matches', component: MatchesComponent},
      {path: 'register', component: RegisterComponent},
      {path: '', component: DistributeComponent},

    ]),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
