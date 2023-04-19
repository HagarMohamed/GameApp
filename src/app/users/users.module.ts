import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';



@NgModule({
  declarations: [
    AllUsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
