import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { ProductSectionComponent } from './Components/product-section/product-section.component';
import { StudentTableComponent } from './Components/student-table/student-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ProductSectionComponent,
    StudentTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
