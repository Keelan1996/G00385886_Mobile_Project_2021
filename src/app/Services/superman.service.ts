import { Injectable } from '@angular/core';

import { from } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// get httpCliet for superman movies
export class SupermanService {

  constructor(private httpClient:HttpClient) { }

  GetSupermanData():Observable<any>{

    return  this.httpClient.get('http://www.omdbapi.com/?apikey=15f23f9d&s=%27superman%27')
    }
}
