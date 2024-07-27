import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../data/model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{

  feedback: Feedback = new Feedback('', '', 8, '', '');

  ngOnInit(): void {
    
  }

  submitFeedback(){
    console.log("Feedback from [submit] - ", this.feedback);
    
  }

}
