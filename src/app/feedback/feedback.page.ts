import { Component, OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';
import {NavController} from '@ionic/angular'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})

// stores feedback storage
export class FeedbackPage implements OnInit {
myFeedback:string = "undefined";
  constructor(private storage:Storage, private navCtrl:NavController) { }

  ngOnInit() {
    this.storage.get("status")
    .then((data)=>{
     this.myFeedback=data;
    })
    .catch();
  }
  
  updateFeedback(){
     this.storage.set('status', this.myFeedback)
     .then(()=>{
        this.navCtrl.navigateBack('/home');
      
     })
     .catch()
   }
}
