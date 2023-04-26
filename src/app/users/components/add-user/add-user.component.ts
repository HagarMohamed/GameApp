import { Component, OnInit } from '@angular/core';
import { AllUserService } from '../../services/all-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private service: AllUserService, private router: Router) { }

  ngOnInit(): void {
  }

  addUser(name:string, email:string, addrees:string){
   this.service.addUser({name:name, email:email, addrees:addrees})
   this.router.navigate(['/alluser']);

  }

}
