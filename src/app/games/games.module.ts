import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllgamesComponent } from './components/allgames/allgames.component';
import { GamesDetailsComponent } from './components/games-details/games-details.component';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './components/game/game.component';
import { RouterModule } from '@angular/router';
import { GameConfigComponent } from './components/game-config/game-config.component';
import { AddGameComponent } from './components/add-game/add-game.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { TableGameComponent } from './components/table-game/table-game.component';



@NgModule({
  declarations: [
    AllgamesComponent,
    GamesDetailsComponent,
    GameComponent,
    GameConfigComponent,
    AddGameComponent,
    EditGameComponent,
    TableGameComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule

  ]
})
export class GamesModule { }
