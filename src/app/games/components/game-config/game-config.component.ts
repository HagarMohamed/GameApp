import { Component, OnInit } from '@angular/core';
import { AllGameServiceService } from '../../services/all-game-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.css']
})
export class GameConfigComponent implements OnInit {

  constructor(private servise:AllGameServiceService, private router:Router) { }

  AllGames:any = [];
  AllFilterdData:any = [];
  loading:boolean = false;
  AllCategories:any = [];
  error:boolean = false;
  allError:any = [];


  ngOnInit(): void {

    this.getDataGames();
    this.getAllCategory();
  }



  getDataGames(){
    this.loading = true;
    setTimeout(() => {

      if(this.servise.allGame.length > 0 ){
        this.AllGames = this.servise.allGame;
        this.AllFilterdData = this.servise.allGame;
        this.loading = false;
      } else{
        this.servise.getAllGames().subscribe(responce =>{
          console.log(responce);

          this.servise.allGame = responce

          this.AllGames = responce;
          this.AllFilterdData = responce;
          this.loading = false;
        }, error => {
          this.error = true;
          this.allError.push(error.message);
          this.loading = false;
        })
      }


    }, 3000);
  }



  getAllCategory(){

    this.loading = true;
    setTimeout(() => {
      this.servise.getCategory().subscribe(responce =>{
        this.AllCategories = responce;
        this.AllCategories.unshift({id:0,category:"All Category"})
        this.loading = false;
      },error =>{
        this.error = true;
        this.allError.push(error.message);
        this.loading = false;
      })

    }, 3000);
  }

  filterCategory(event:any){

   if(event.target.value == 'All Category'){
    this.AllFilterdData = this.AllGames
   }
   else{
    let Result = this.AllGames.filter((element:any) =>
      element.game_category === event.target.value
    )
    this.AllFilterdData = Result;
   }
  }

  search(search:string){


    let Result = this.AllGames.filter((element:any) =>
      element.game_name.toLowerCase().includes(search.toLowerCase())
    )
     this.AllFilterdData = Result;

  }


  filterByDate(event:any){

    console.log(event.target.value)

    let Result = this.AllGames.filter((element:any) =>
      element.creation_date == event.target.value
    )
    this.AllFilterdData = Result;
  }

  editGame(game:any){

    this.router.navigate(['/editgame']);
    this.servise.game = game;

  }

  deleteGame(game:any){
    let index = this.AllFilterdData.indexOf(game);
    this.AllFilterdData.splice(index,1);

  }

}
