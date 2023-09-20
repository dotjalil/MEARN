import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task1-ecommerce-no-routing';

  currentRoute: string = 'Home';
  setActiveRoute(routeName: any): void {
    this.currentRoute = routeName;
  }
}
