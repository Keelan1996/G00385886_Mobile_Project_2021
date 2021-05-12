import { Component, OnInit } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-geo-location',
  templateUrl: './geo-location.page.html',
  styleUrls: ['./geo-location.page.scss'],
})

// gets the geoloction from the plugin
export class GeoLocationPage implements OnInit {
lat:any;
long:any;
  constructor(private geolocation:Geolocation) { }

  ngOnInit() {
  }

  GPS(){
     
this.geolocation.getCurrentPosition().then((resp) => {
  this.lat= resp.coords.latitude;
   this.long=resp.coords.longitude;
 }).catch((error) => {
   console.log('Error getting location', error);
 });

  }

}
