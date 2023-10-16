// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserModule } from '../user/user.module'; // Import UserModule
import { AdminModule } from '../admin/admin.module'; // Import AdminModule

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    UserModule, // Include UserModule here
    AdminModule, // Include AdminModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
