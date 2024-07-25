import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent implements OnInit{
  reviews: any[] = []

  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.loadReviews();
  }

  loadReviews(){
    this.httpClient.get<any[]>('assets/data/movieRates.json')
    .subscribe((data:any) => {
      this.reviews = data;
    })
  }
}
