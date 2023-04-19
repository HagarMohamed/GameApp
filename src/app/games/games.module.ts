import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllgamesComponent } from './components/allgames/allgames.component';
import { GamesDetailsComponent } from './components/games-details/games-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AllgamesComponent,
    GamesDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule

  ]
})
export class GamesModule { }
