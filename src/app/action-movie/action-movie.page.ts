import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../Services/movies.service'
@Component({
  selector: 'app-action-movie',
  templateUrl: './action-movie.page.html',
  styleUrls: ['./action-movie.page.scss'],
})

// gets the movie data
export class ActionMoviePage implements OnInit {
MovieData:any = [];
  constructor(private movieService:MoviesService) { }

  ngOnInit() {
    this.movieService.GetMovieData().subscribe(
      (data)=>{

        this.MovieData = data.Search;
        console.log(this.MovieData);
      }
    );
  }

}
