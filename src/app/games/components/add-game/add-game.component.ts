import { Component, OnInit } from '@angular/core';
import { AllGameServiceService } from '../../services/all-game-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(private service: AllGameServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  addGame(name:string, imageUrl:string, category:string, date:string){

    this.service.addGame({game_name:name, imageUrl:imageUrl, game_category:category, creation_date:date});

    this.router.navigate(['/config'])

  }

}
