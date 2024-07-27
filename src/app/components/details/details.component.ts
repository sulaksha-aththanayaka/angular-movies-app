import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit{

  movieId = ''

  constructor(private activatedRoute: ActivatedRoute, private movieService: MoviesService) {
    this.activatedRoute.params.subscribe((p) => {
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
    this.movieService.getMovieSummary()
    .subscribe((data:any) => {
      this.stars = data.stars;
      this.directors = data.directors;
      this.genres = data.genres;
    })
  }

}
