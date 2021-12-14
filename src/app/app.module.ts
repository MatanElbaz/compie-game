import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';

import { GameStateService } from './services/game-state.service';
import { SharedPlayerService } from './services/shared-player.service';

import { MainGameComponent } from './components/main-game/main-game.component';
import { Bulbs } from './components/bulbs/bulbs.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainGameComponent,
    Bulbs
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [SharedPlayerService, GameStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
