import { Injectable } from '@angular/core';
import { from } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// get httpCliet for Batman movies
export class MoviesService {

  constructor(private httpClient:HttpClient) { }

  GetMovieData():Observable<any>{

  return  this.httpClient.get('http://www.omdbapi.com/?apikey=15f23f9d&s=%27batman%27')
  }
}
