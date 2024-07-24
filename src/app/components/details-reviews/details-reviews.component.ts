import { Component } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrl: './details-reviews.component.css'
})
export class DetailsReviewsComponent {
  reviews: any[] = [
    {
      rate: '7.5/10',
      review: 'This p tag is goint to have the review description. Sometimes it can be very long and that is why we are using accordion',
      author: 'Review 1 author',
      usefulCount: '100',
      totalCount: '120'
    },
    {
      rate: '8.5/10',
      review: 'This p tag is goint to have the review description. Sometimes it can be very long and that is why we are using accordion',
      author: 'Review 2 author',
      usefulCount: '120',
      totalCount: '150'
    },
    {
      rate: '9.5/10',
      review: 'This p tag is goint to have the review description. Sometimes it can be very long and that is why we are using accordion',
      author: 'Review 3 author',
      usefulCount: '150',
      totalCount: '180'
    },
    
  ]
}
