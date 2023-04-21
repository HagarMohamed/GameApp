import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllGameServiceService {
game:any = {};
  constructor(private http: HttpClient) {

   }

   getAllGames(){
    return this.http.get('../../../assets/data_game.json')
   }

   getCategory(){
    return this.http.get('../../../assets/game_category.json')
   }
}
