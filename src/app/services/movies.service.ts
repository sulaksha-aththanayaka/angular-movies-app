import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getFanFavouriteMovies() {
    return this.httpClient.get<any[]>('/assets/data/fanFavouriteMovies.json');
  }

  getTopMovies() {
    return this.httpClient.get<any[]>('/assets/data/topMovies.json');
  }

  getMovieSummary() {
    return this.httpClient.get<any[]>('assets/data/movieSummary.json');
  }

  getActors() {
    return this.httpClient.get<any[]>('assets/data/movieActors.json')
  }

  getSimilarMovies() {
    return this.httpClient.get<any[]>('assets/data/similarMovies.json');
  }

  getReviews(){
    return this.httpClient.get<any[]>('assets/data/movieRates.json');
  }

  getSearchResults() {
    return this.httpClient.get<any[]>('assets/data/searchResults.json');
  }
}
