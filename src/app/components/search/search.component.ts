import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit{
  movieTitle = ""
  searchResults:any[] = []

  constructor(private _activatedRoute: ActivatedRoute, private httpClient: HttpClient) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieTitle = p['movieTitle'];
    })
  }

  ngOnInit(): void{
    this.loadSearchResults();
  }

  loadSearchResults() {
    this.httpClient.get<any[]>('assets/data/searchResults.json')
    .subscribe((data:any) => {
      this.searchResults = data;
    })
  }

} 
