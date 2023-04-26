import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllgamesComponent } from './games/components/allgames/allgames.component';
import { AllUsersComponent } from './users/components/all-users/all-users.component';
import { GamesDetailsComponent } from './games/components/games-details/games-details.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { EditUserComponent } from './users/components/edit-user/edit-user.component';
import { GameConfigComponent } from './games/components/game-config/game-config.component';
import { AddGameComponent } from './games/components/add-game/add-game.component';
import { EditGameComponent } from './games/components/edit-game/edit-game.component';

const routes: Routes = [
  {path:"allgames", component: AllgamesComponent},
  {path:"gamedetail", component: GamesDetailsComponent},
  {path: "alluser", component: AllUsersComponent},
  {path: "adduser", component: AddUserComponent},
  {path: "edituser", component: EditUserComponent},
  {path: "config", component: GameConfigComponent},
  {path: "addgame", component: AddGameComponent},
  {path: "editgame", component: EditGameComponent},
  {path: "**", redirectTo: "allgames", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
