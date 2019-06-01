import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from 'src/app/components/employee/employee.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home"},
  { path: "home", component: HomeComponent },
  { path: "employee",component: EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }


