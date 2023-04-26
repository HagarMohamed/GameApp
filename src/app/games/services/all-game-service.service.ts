import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllGameServiceService {
game:any = {};
allGame:any = [];

  constructor(private http: HttpClient) {

   }

   getAllGames(){
    return this.http.get('../../../assets/data_game.json')
   }

   getCategory(){
    return this.http.get('../../../assets/game_category.json')
   }

   addGame(user:any){
    this.allGame.push(user);
   }
}
