import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllgamesComponent } from './components/allgames/allgames.component';
import { GamesDetailsComponent } from './components/games-details/games-details.component';



@NgModule({
  declarations: [
    AllgamesComponent,
    GamesDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
