import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllUserService {

  allUser:any = [];
  user:any = {};

  constructor(private http:HttpClient) {
  }

  getAllUsers(){
    return this.http.get('../../../assets/customer_data.json')
  }

  addUser(user:any){
  this.allUser.push(user);
  }

  removeItem(id:string){
    console.log("Deleted")
    console.log("id = "+id)
    this.allUser = this.allUser.filter((user:any)=>user.id != id)
  }
}
