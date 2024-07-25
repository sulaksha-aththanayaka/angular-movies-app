import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // Inject http client
  constructor(private httpClient: HttpClient) {}

  isActive = false;

  fanFavouriteMovies: any[] = []

  topMovies: any[] = []

  ngOnInit(): void {
    this.getfanFavouriteMovies();
    this.getTopMovies();
  }

  getfanFavouriteMovies(){
    this.httpClient.get<any[]>('/assets/data/fanFavouriteMovies.json')
    .subscribe((data: any[]) => {
      console.log("Fan favourites ", data);
      this.fanFavouriteMovies = data
    });
  }

  getTopMovies(){
    this.httpClient.get<any[]>('/assets/data/topMovies.json')
    .subscribe((data: any[]) => {
      console.log("Top Movies ",  data);
      this.topMovies = data;
    });
  }

  // currentStyles: Record<string, string> = {}

  // isSuccess = false
  // isAlign = false
  // isLarge = false

  // constructor() {
  //   this.currentStyles = {
  //     'text-align': this.isAlign ? 'center' : '',
  //     'color': this.isSuccess ? 'green': 'red',
  //     'font-size': this.isLarge ? 'large': 'small'
  //   }
  // }
}
