import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EmployeeComponent } from 'src/app/components/employee/employee.component';
import { CreateEmployeeComponent } from 'src/app/components/employee/add-employee/create-employee.component';
import { EmployeeListComponent } from 'src/app/components/employee/employee-list/employee-list/employee-list.component';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    EmployeeListComponent ],

  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
    ,BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,    
    ReactiveFormsModule,
    HttpClientModule,   
    BrowserAnimationsModule
 
  ],
  providers: [HttpClient]
})
export class AdminModule { }
