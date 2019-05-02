import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home"},
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", loadChildren: "src/app/modules/admin/admin.module#AdminModule"},
  { path: "**", redirectTo: "error" },
  { path: "error", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


