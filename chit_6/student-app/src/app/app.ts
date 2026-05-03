

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// my integration code
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';   // ✅ USE THIS

import { Student } from './MyComponents/student/student';

@Component({
  selector: 'app-root',

  // my
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    HttpClientModule,   // ✅ FIX
    Student
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('student-app');
}