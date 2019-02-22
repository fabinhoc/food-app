import { MainDashComponent } from './main-dash/main-dash.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:MainDashComponent},
  {path:'users', component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
