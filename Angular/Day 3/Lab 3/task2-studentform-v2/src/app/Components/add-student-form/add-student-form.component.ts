import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css'],
})
export class AddStudentFormComponent {
  studentForm = new FormGroup({
    studentName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    age: new FormControl(null, [Validators.required, Validators.min(18)]),
  });

  get getStudentName(): any {
    return this.studentForm.controls['studentName'];
  }

  get getAge(): any {
    return this.studentForm.controls['age'];
  }

  @Output() addStudentEvent = new EventEmitter();

  handleAddStudentForm(e: Event) {
    e.preventDefault();
    console.log(e);
    // console.log(this.getStudentName);
    if (this.studentForm.status === 'VALID') {
      this.addStudentEvent.emit({
        name: this.getStudentName.value,
        age: this.getAge.value,
      });
    } else {
      alert('Enter valid data!');
    }
  }

  studentNameValidationCSSClass: string = '';

  validateStudentName(status: any) {
    if (status === 'VALID') {
      this.studentNameValidationCSSClass = 'is-valid';
    } else {
      this.studentNameValidationCSSClass = 'is-invalid';
    }
    console.log('class: ', this.studentNameValidationCSSClass);
  }

  ageValidationCSSClass: string = '';

  validateStudentAge(status: any) {
    if (status === 'VALID') {
      this.ageValidationCSSClass = 'is-valid';
    } else {
      this.ageValidationCSSClass = 'is-invalid';
    }
    console.log('class: ', this.ageValidationCSSClass);
  }
}
