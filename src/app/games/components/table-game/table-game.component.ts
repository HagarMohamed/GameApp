import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AllGameServiceService } from '../../services/all-game-service.service';


@Component({
  selector: 'tr[app-table-game]',
  templateUrl: './table-game.component.html',
  styleUrls: ['./table-game.component.css']
})
export class TableGameComponent implements OnInit {
@Input() data:any = [];
@Output() deletedValue = new EventEmitter();
@Output() editValue = new EventEmitter();
  constructor(private service: AllGameServiceService) { }

  ngOnInit(): void {
  }

  deleteGame(data:any){

    this.deletedValue.emit(data);
  }

  editGame(data:any){

    this.editValue.emit(data);
  }
}
