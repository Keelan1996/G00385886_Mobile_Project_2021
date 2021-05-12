import { Component, OnInit } from '@angular/core';
import {ComedyService} from '../Services/comedy.service'
@Component({
  selector: 'app-comedy-movie',
  templateUrl: './comedy-movie.page.html',
  styleUrls: ['./comedy-movie.page.scss'],
})

// gets data for Harry Potter movies
export class ComedyMoviePage implements OnInit {
comedyData:any=[];
  constructor(private comedyService:ComedyService) { }

  ngOnInit() {
     this.comedyService.GetComedyData().subscribe(
       (data)=>{
           this.comedyData= data.Search;
           console.log(this.comedyData);
       }
     );

  }

}
