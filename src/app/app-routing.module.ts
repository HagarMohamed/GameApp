import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllgamesComponent } from './games/components/allgames/allgames.component';
import { AllUsersComponent } from './users/components/all-users/all-users.component';
import { GamesDetailsComponent } from './games/components/games-details/games-details.component';

const routes: Routes = [
  {path:"allgames", component: AllgamesComponent},
  {path:"gamedetail", component: GamesDetailsComponent},
  {path: "alluser", component: AllUsersComponent},
  {path: "**", redirectTo: "allgames", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
