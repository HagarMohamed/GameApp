import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AllUserService } from '../../services/all-user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() data:any = {};
@Output() deletedValue = new EventEmitter<any>();
  

constructor(private service: AllUserService, private router: Router) { }


  ngOnInit(): void {
  }

  editUser(){

    this.service.user = this.data;
    this.router.navigate(['/edituser']);
  }


  deleteUser(data:any){
    // this.router.navigate(['/alluser']);
    this.deletedValue.emit(data);
  }

}
