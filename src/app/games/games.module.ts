import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllgamesComponent } from './components/allgames/allgames.component';
import { GamesDetailsComponent } from './components/games-details/games-details.component';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './components/game/game.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AllgamesComponent,
    GamesDetailsComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule

  ]
})
export class GamesModule { }
