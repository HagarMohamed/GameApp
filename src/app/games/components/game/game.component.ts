import { Component, OnInit, Input} from '@angular/core';
import { AllGameServiceService } from '../../services/all-game-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
@Input() data:any = {}
  constructor(private service:AllGameServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  openDetails(game:any){
    this.service.game = game;
    this.router.navigate(['/gamedetail'])
  } 
}
