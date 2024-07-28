import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../data/model/Feedback';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit{

  // feedback: Feedback = new Feedback('', '', 8, '', '');
  feedbackForm!: FormGroup

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      emailAddress: [''],
      phoneNumber: [''],
      rate: [8],
      feedbackTitle: [''],
      feedback: ['']
    })
  }

  submitFeedback(){
    // console.log("Feedback from [submit] - ", this.feedback);
    console.log("Feedback form ", this.feedbackForm.value);
    
  }

}
