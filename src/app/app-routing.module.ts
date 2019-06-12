import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './shared/error/error.component';
import { HomeComponent } from './components/home/home.component';

import { NotFoundComponent } from './shared/error/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './shared/error/error-pages/server-error/server-error.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AddCattleComponent } from './components/cattle/add-cattle.components/add-cattle.component';
import { BreedingComponent } from './components/breeding/breeding.component';
import { MilkingComponent } from './components/milking/milking.component';
import { MortalityComponent } from './components/mortality/mortality.component';
import { HealthComponent } from './components/health/health.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { CalfComponent } from './components/calf/calf.component';
import { CattleHealthComponent } from './components/cattle-health/cattle-health.component';
import { IncomeComponent } from './components/finance/income/income.component';
import { FinanceExpenseComponent } from './components/finance/finance-expense/finance-expense.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent},
  { path: 'employee', component: EmployeesComponent },
  { path: 'add/cattle' , component: AddCattleComponent},
  { path: 'milking', component: MilkingComponent},
  { path: 'breeding', component: BreedingComponent },
  { path: 'mortality', component: MortalityComponent},
  { path: 'health/cattle', component: CattleHealthComponent},
  { path: 'health/calf', component: CattleHealthComponent},
  { path: 'finance/cash-income-report', component: IncomeComponent},
  { path: 'finance/expenses-report', component: FinanceExpenseComponent},
  { path: 'expenses', component: ExpensesComponent},
  // { path: 'health:id',component: HealthComponent},
  { path: 'calf', component: CalfComponent},
  { path: 'admin', loadChildren: 'src/app/modules/admin/admin.module#AdminModule' },
  { path: '404', component: NotFoundComponent },
  { path: '500', component: ServerErrorComponent },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


