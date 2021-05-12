import { Component, OnInit } from '@angular/core';
import {SpidermanService} from '../Services/spiderman.service'
@Component({
  selector: 'app-spiderman',
  templateUrl: './spiderman.page.html',
  styleUrls: ['./spiderman.page.scss'],
})

// gets spiderman movie data
export class SpidermanPage implements OnInit {
   spidermanData:any[];
  constructor(private spidermanService:SpidermanService) { }

  ngOnInit() {
       
    this.spidermanService.GetSpiderManData().subscribe(
    (data)=>{
       this.spidermanData = data.Search;
       console.log(this.spidermanData);

    }

    );


  }

}
