import { Component, OnInit } from '@angular/core';

import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

// gets the data from storage to display on another page
export class HomePage implements OnInit {

  myFeedback:string;
  constructor(private storage:Storage) {}

  ngOnInit(){
       
    this.storage.get('status')
    .then((data)=>{
      this.myFeedback = data;

    })
    .catch()
  }

  

}
