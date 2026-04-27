import { Component, Output, EventEmitter } from '@angular/core';

// my integrate 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',

  
  // my integrate
  standalone:true,
  imports: [FormsModule],

  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  // this my integrate part 
  @Output() goProfile = new EventEmitter();

  email = '';
  password = '';

  login() {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user.email === this.email && user.password === this.password) {
      alert("Login Success");
      this.goProfile.emit();
    } else {
      alert("Wrong Credentials");
    }
  }


}
