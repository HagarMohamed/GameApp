import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllUserService {

  constructor(private http:HttpClient) {
  }

  getAllUsers(){
    return this.http.get('../../../assets/customer_data.json')
  }
}
