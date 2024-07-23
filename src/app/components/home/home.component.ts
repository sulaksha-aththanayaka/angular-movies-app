import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() {}

  fanFavouriteMovies: any[] = [
    {
      imageUrl: '../../../assets/images/shawshank1.jpg',
      title: 'Movie #1 Title',
      actors: 'Movie #1 Actors',
      year: '2023',
      rate: '9.5/10',
      rank: '1'
    },
    {
      imageUrl: '../../../assets/images/shawshank1.jpg',
      title: 'Movie #2 Title',
      actors: 'Movie #2 Actors',
      year: '2023',
      rate: '9.5/10',
      rank: '1'
    },
    {
      imageUrl: '../../../assets/images/shawshank1.jpg',
      title: 'Movie #3 Title',
      actors: 'Movie #3 Actors',
      year: '2023',
      rate: '9.5/10',
      rank: '1'
    },
  ]

  topMovies: any[] = [
    {
      imageUrl: '../../../assets/images/shawshank1.jpg',
      title: 'Movie #1 Title',
      actors: 'Movie #1 Actors',
      year: '2023',
      rate: '9.5/10',
      rank: '1'
    },
    {
      imageUrl: '../../../assets/images/shawshank1.jpg',
      title: 'Movie #2 Title',
      actors: 'Movie #2 Actors',
      year: '2023',
      rate: '9.5/10',
      rank: '1'
    },
  ]

  isVisible = true;
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
