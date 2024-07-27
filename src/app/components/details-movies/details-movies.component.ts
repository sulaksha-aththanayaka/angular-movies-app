import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-movies',
  templateUrl: './details-movies.component.html',
  styleUrl: './details-movies.component.css'
})
export class DetailsMoviesComponent implements OnInit{
  simillarMovies: any[] = []

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    this.loadSimilarMovies();
  }

  loadSimilarMovies(){
    this.moviesService.getSimilarMovies()
    .subscribe((data:any) => {
      this.simillarMovies = data;
    })
  }
}
