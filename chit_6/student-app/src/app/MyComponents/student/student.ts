// student.ts

import { Component, NgModule } from '@angular/core';

// my 
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student',

  standalone : true,
  imports: [CommonModule, FormsModule],

  templateUrl: './student.html',
  styleUrl: './student.css',
})

export class Student {

  // my integration code 

  students: any[] = [];
  name = '';
  age = '';
  id = '';

  constructor(private http: HttpClient) { }

  // INSERT
  addStudent() {
    this.http.post("http://localhost:3000/students", {
      name: this.name,
      age: this.age
    }).subscribe(() => this.getStudents());
  }

  // GET
  getStudents() {
    this.http.get<any[]>("http://localhost:3000/students")
      .subscribe(data => this.students = data);
  }

  // DELETE
  deleteStudent(id: string) {
    this.http.delete("http://localhost:3000/students/" + id)
      .subscribe(() => this.getStudents());
  }

  // UPDATE
  updateStudent() {
    this.http.put("http://localhost:3000/students/" + this.id, {
      name: this.name,
      age: this.age
    }).subscribe(() => this.getStudents());
  }


}

