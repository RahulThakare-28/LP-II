import { Component } from '@angular/core';

// my integrate 
//import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-profile',

  
  // my integrate
  standalone:true,
  //imports: [FormsModule],

  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {


  // this my integrate part
  user = JSON.parse(localStorage.getItem('user') || '{}');
}
