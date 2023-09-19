import { Component } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent {
  students: {
    name: string;
    age: number;
  }[] = [];
  studentName: string = '';
  studentAge: number = 0;
  validName = false;
  validAge = false;

  validStudent(): boolean {
    return true;
  }

  isDuplicateStudent() {
    var isDup = false;
    this.students.forEach((student) => {
      if (student.name === this.studentName && student.age === this.studentAge)
        isDup = true;
    });
    return isDup;
  }

  addStudent(name: string, age: number) {
    this.students.push({
      name: name,
      age: age,
    });
  }

  handleFormSubmit(e: Event) {
    e.preventDefault();

    if (this.isDuplicateStudent()) {
      alert('Student already exists!');
      return;
    }

    if (this.validStudent())
      this.addStudent(this.studentName, Number(this.studentAge));
    else return;

    this.studentName = '';
    this.studentAge = 0;
  }

  handleStudentAgeInput(val: string) {
    this.studentAge = Number(val);
    if (this.studentAge >= 18) this.validAge = true;
    else this.validAge = false;
  }
  handleStudentNameInput(val: string) {
    this.studentName = val;
    if (this.studentName.length >= 4) this.validName = true;
    else this.validName = false;
  }
}
