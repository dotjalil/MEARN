// user-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent as UserHomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: UserHomeComponent },
  // ... other user routes if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
