import { Component, OnInit } from '@angular/core';
import { AllGameServiceService } from '../../services/all-game-service.service';

@Component({
  selector: 'app-allgames',
  templateUrl: './allgames.component.html',
  styleUrls: ['./allgames.component.css']
})
export class AllgamesComponent implements OnInit {

  constructor(private servise:AllGameServiceService) { }

  AllGames:any = [];
  AllCategories:any = []

  ngOnInit(): void {

    this.getDataGames();
    this.getAllCategory();
  }



  getDataGames(){
    this.servise.getAllGames().subscribe(responce =>{
      console.log(responce);
      this.AllGames = responce;
    })
  }

  getAllCategory(){
    this.servise.getCategory().subscribe(responce =>{
      this.AllCategories = responce;
      this.AllCategories.unshift({id:0,category:"All Category"})
    })
  }

  openDetails(){

  }
}
