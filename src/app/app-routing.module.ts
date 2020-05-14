import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UpdatesComponent } from './updates/updates.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Updates', component: UpdatesComponent},
  {path: 'Doctor', component: DoctorComponent},
  {path: 'View' , component: ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
