import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent implements OnInit{

  actors: any[] = []

  constructor(private movieService: MoviesService){}

  ngOnInit(): void {
    this.loadActors();
  }

  loadActors() {
    this.movieService.getActors()
    .subscribe((data:any) => {
      this.actors = data;
    })
  }

}
