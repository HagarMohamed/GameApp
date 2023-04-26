import { Component, OnInit } from '@angular/core';
import { AllUserService } from '../../services/all-user.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private service: AllUserService, private router: Router) { }

  user:any  = {};

  ngOnInit(): void {

    this.user =  this.service.user;
  }

  editUser(name:string, email:string, addrees:string){


    let index =  this.service.allUser.indexOf(this.user)
    this.service.allUser[index].name = name
    this.service.allUser[index].email = email
    this.service.allUser[index].addrees = addrees
   this.router.navigate(['/alluser']);

  }


}
