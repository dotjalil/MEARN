import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  tasks: string[] = [];
  taskTitle: string = '';
  handleFormSubmit(e: Event): void {
    e.preventDefault();
    this.tasks.push(this.taskTitle);
    this.taskTitle = '';
  }
  addTask(task: string): void {
    this.tasks.push(task);
  }
  handleTaskTitle(val: string): void {
    this.taskTitle = val;
  }
  removeTask(i: number): string[] {
    return (this.tasks = this.tasks.filter((task, index) => index !== i));
  }
}
