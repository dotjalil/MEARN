import { Component } from '@angular/core';

@Component({
  selector: 'app-repeating-input',
  templateUrl: './repeating-input.component.html',
  styleUrls: ['./repeating-input.component.css'],
})
export class RepeatingInputComponent {
  text: string = '';
  showText(e: any): void {
    this.text = e.target.value;
  }
}
