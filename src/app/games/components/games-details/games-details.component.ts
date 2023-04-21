import { Component, OnInit } from '@angular/core';
import { AllGameServiceService } from '../../services/all-game-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games-details',
  templateUrl: './games-details.component.html',
  styleUrls: ['./games-details.component.css']
})
export class GamesDetailsComponent implements OnInit {

  constructor(private service: AllGameServiceService) { }
  game:any = {};

  ngOnInit(): void {
    this.game = this.service.game;
    
  }


}
