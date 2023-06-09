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

  filterByDate(event:any){

    console.log(event.target.value)

    let Result = this.AllGames.filter((element:any) =>
      element.creation_date == event.target.value
    )
    this.AllFilterdData = Result;
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
      element.game_name.includes(search)
    )
     this.AllFilterdData = Result;

  }


}
