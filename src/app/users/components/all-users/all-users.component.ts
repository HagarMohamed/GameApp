import { Component, OnInit } from '@angular/core';
import { AllUserService } from '../../services/all-user.service';
import { filter } from 'rxjs/operators';

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
    if(this.service.allUser.length > 0)
       this.AllUsers = this.service.allUser
    else{
      this.service.getAllUsers().subscribe(responce => {
        this.AllUsers = responce;
        this.service.allUser = responce

      })
    }

    console.log(this.service.allUser)
  }

  deletedItem(user:any){
     this.service.removeItem(user.id);
     this.AllUsers = this.service.allUser
  }

}
