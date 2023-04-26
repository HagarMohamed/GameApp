import { Component, OnInit } from '@angular/core';
import { AllGameServiceService } from '../../services/all-game-service.service';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {

  game:any = {};

  constructor(private service: AllGameServiceService, private router: Router) { }

  ngOnInit(): void {

    this.game = this.service.game;
  }

  editGame(name:string, imageUrl:string, category:string, date:string){
    let index = this.service.allGame.indexOf(this.game)
    let myObject = this.service.allGame[index]
    myObject.game_name = name;
    myObject.imageUrl = imageUrl;
    myObject.category_name = category;
    myObject.creation_date = date;
    this.router.navigate(['/config']);


  }

}
