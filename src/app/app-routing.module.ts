import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './components/home/home.component';

import { NotFoundComponent } from './shared/error/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './shared/error/error-pages/server-error/server-error.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },  
  { path: "login", component: LoginComponent },
  { path: "home",component: HomeComponent},
  {path: "employee",component: EmployeesComponent}, 
  { path: "admin", loadChildren: "src/app/modules/admin/admin.module#AdminModule" },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: ServerErrorComponent },
  { path: "**", redirectTo: "404",pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


