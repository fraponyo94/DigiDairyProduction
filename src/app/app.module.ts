import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule ,ReactiveFormsModule }   from '@angular/forms';

import { HttpClientModule,  HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularSplitModule } from 'angular-split';
import { SplitViewComponent } from './shared/split-view/split-view.component';
import { HeaderComponent,SidenavComponent, LayoutComponent,ErrorComponent, 
  FooterComponent,NotFoundComponent,ServerErrorComponent, UnauthorizedComponent,
  } from './shared/index';
import { SharedModule } from './shared/shared.module';

import { EmployeeComponent } from './components/employee/employee.component';
import { CreateEmployeeComponent } from './components/employee/add-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list/employee-list.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { UpdateDatatableService } from './services/services/update-datatable.service';
import { ConfirmService } from './services/services/confirm-dialog/confirm.service';
import { MessagesService } from './services/services/messages-service/messages.service';
import { FormErrorsService } from './services/services/form-validation/form-errors.service';
import { EmployeeService } from './services/employee.service';
import { ConfirmComponent } from './services/services/confirm-dialog/confirm.component';
import { MessagesComponent } from './services/services/messages-service/messages.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { AddEditFormComponent } from './components/employees/add-edit-form/add-edit-form.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AuthService } from './auth/auth-services/auth.service';
import { AddCattle } from './components/cattle/add-cattle.components/add-cattle.components.component';


@NgModule({
  declarations: [
    AppComponent,   
    LoginComponent,
    HomeComponent,      
    SplitViewComponent,
    HeaderComponent,
    SidenavComponent,
    LayoutComponent,
    ErrorComponent, 
    FooterComponent,
    NotFoundComponent,
    ServerErrorComponent, 
    UnauthorizedComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent,
    ConfirmComponent,
    MessagesComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    AddEditFormComponent,
    AddCattle.ComponentsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,     
    ReactiveFormsModule,
    HttpClientModule,   
    BrowserAnimationsModule,   
    MaterialModule,
    FlexLayoutModule,
    AngularSplitModule.forRoot()

  ],
  providers: [    
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ,
    HttpClient,
    UpdateDatatableService,
    EmployeeService,
    ConfirmService,
    MessagesService,
    FormErrorsService,
    AuthService
   
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmComponent,
    MessagesComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
  ],
})
export class AppModule { }
