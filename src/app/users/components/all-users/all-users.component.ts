import { Component, OnInit } from '@angular/core';
import { AllUserService } from '../../services/all-user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private service:AllUserService) { }

  AllUsers:any = [];

  ngOnInit(): void {

   this.getUserData(); 
  }




  getUserData(){

    this.service.getAllUsers().subscribe(responce => {

      return this.AllUsers = responce;
    })
  }

}
