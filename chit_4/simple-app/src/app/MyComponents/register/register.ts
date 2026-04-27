import { Component, Output, EventEmitter } from '@angular/core';

// my integrate 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',

  // my integrate
  standalone:true,
  imports: [FormsModule],

  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  // this my integrate part. 
  @Output() goLogin = new EventEmitter();

  user = { name: '', email: '', password: '' };

  register() {
    localStorage.setItem('user', JSON.stringify(this.user));
    alert("Registered!");
    this.goLogin.emit();
  }


}
