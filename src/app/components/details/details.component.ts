import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {

  movieId = ''

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p['id'];
    })
  }

  stars = ['Star 1', 'Star 2', 'Star 3']
  directors = ['Director 1', 'Director 2', 'Director 3']
  genres = ['Genre 1', 'Genre 2', 'Genre 3']

  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  ngOnChanges(): void {
    console.log("ngOnChanges called");
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }


}
