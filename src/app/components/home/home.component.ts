import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';

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
    .subscribe({
      next: (data: any[]) => {
        console.log("Fan favourites ", data);
        this.fanFavouriteMovies = data;
      },
      error: (error) => {
        console.log("Something went wrong [getfanFavouriteMovies]", error); 
      },
      complete: () => {
        console.log("[getfanFavouriteMovies] Request completed");
      }
    });
  }

  // getfanFavouriteMovies(){
  //   this.httpClient.get<any[]>('/assets/data/fanFavouriteMovies.json')
  //   .pipe(
  //     catchError((error) => {
  //       console.log("Something went wrong [getfanFavouriteMovies]", error); 
        
  //       return of(null);
  //     })
  //   ).subscribe((data) => {
  //     if(data){
  //       this.fanFavouriteMovies = data;
  //     }else{
  //       this.fanFavouriteMovies = [];
  //     }
  //   });
  // }

  getTopMovies(){
    this.httpClient.get<any[]>('/assets/data/topMovies.json')
    .subscribe({
      next: (data: any[]) => {
        console.log("Top Movies ",  data);
        this.topMovies = data;
      },
      error: (error) => {
        console.log("Something went wrong [getTopMovies]", error);
      },
      complete: () => {
        console.log("[getTopMovies] Request completed");
        
      }
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
