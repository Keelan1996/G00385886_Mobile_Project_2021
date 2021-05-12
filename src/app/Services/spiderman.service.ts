import { Injectable } from '@angular/core';

import { from } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// get httpCliet for Spiderman movies
export class SpidermanService {

  constructor(private httpClient:HttpClient) { }

  GetSpiderManData():Observable<any>{

    return this.httpClient.get('http://www.omdbapi.com/?apikey=15f23f9d&s=%27Spider-Man%27')
  }
}
