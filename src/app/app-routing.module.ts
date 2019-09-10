import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetappointmentComponent } from './setappointment/setappointment.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: 'Home' , pathMatch: 'full' },
  { path: 'AppointmentSchedule', component: SetappointmentComponent },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
