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
   console.log(event.target.value);

   if(event.target.value == "All Category"){


    return this.AllGames
   }
   else{

    let Result = this.AllGames.filter((element:any) =>
    element.game_category === event.target.value

   )
   console.log(Result)
   this.AllFilterdData = Result;
   }
    
  }

  
}
