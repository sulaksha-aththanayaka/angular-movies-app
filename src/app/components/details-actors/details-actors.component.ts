import { Component } from '@angular/core';

@Component({
  selector: 'app-details-actors',
  templateUrl: './details-actors.component.html',
  styleUrl: './details-actors.component.css'
})
export class DetailsActorsComponent {

  actors: any[] = [
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 1', role: 'Role 1'},
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 2', role: 'Role 2'},
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 3', role: 'Role 3'},
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 4', role: 'Role 4'},
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 5', role: 'Role 5'},
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 6', role: 'Role 6'},
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 7', role: 'Role 7'},
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 8', role: 'Role 8'},
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 9', role: 'Role 9'},
    {imageUrl:'../../../assets/images/shawshank3.jpg', name: 'Actor 10', role: 'Role 10'},
  ]

}
