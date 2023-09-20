import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task2-studentform-v2';

  students: {}[] = [];

  addStudent(student: {}) {
    this.students.push(student);
    console.log(this.students);
  }
}
