import { Injectable } from '@angular/core';

import { from } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// get httpCliet for harry potter movies
export class ComedyService {

  constructor(private httpClient:HttpClient) { }
 
  GetComedyData():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?apikey=15f23f9d&s=%27harry%20potter%27');
    

  }

}
