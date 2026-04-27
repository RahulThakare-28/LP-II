import { Component, signal, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// my import lines, 
import { Register } from './MyComponents/register/register';
import { Login } from './MyComponents/login/login';
import { Profile } from './MyComponents/profile/profile';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',

  // my integrate part
  standalone : true,
  imports: [RouterOutlet, CommonModule, Register, Login, Profile],

  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  //protected readonly title = signal('simple-app');

  currentPage = 'register';
}



//----------------------------------------------------
// this my integration
/*
export class AppComponent {
currentPage = 'register';

}

*/
  