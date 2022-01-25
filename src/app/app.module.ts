import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { SigninComponent } from './components/signin/signin.component';
import { GameComponent } from './components/game/game.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { TableComponent } from './components/ranking/table/table.component';
import { WinComponent } from './shared/components/win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    SigninComponent,
    GameComponent,
    NavComponent,
    TableComponent,
    WinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
