// admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent as AdminHomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '/admin', component: AdminHomeComponent },
  // ... other admin routes if needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
