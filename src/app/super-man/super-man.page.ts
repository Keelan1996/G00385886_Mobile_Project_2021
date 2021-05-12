import { Component, OnInit } from '@angular/core';
import {SupermanService} from '../Services/superman.service'
@Component({
  selector: 'app-super-man',
  templateUrl: './super-man.page.html',
  styleUrls: ['./super-man.page.scss'],
})

// gets superman http movie data
export class SuperManPage implements OnInit {
  supermanData:any[];
  constructor(private supermanService:SupermanService) { }

  ngOnInit() {
    this.supermanService.GetSupermanData().subscribe(
       (data)=>{
         this.supermanData = data.Search;
         console.log(this.supermanData);

       }

    );
  }

}
