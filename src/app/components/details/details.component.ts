import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit{

  movieId = ''

  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p['id'];
    })
  }

  stars = []
  directors = []
  genres = []

  ngOnInit(): void {
    this.loadMovieSummary();
  }

  loadMovieSummary() {
    this.httpClient.get<any[]>('assets/data/movieSummary.json')
    .subscribe((data:any) => {
      this.stars = data.stars;
      this.directors = data.directors;
      this.genres = data.genres;
    })
  }

}
