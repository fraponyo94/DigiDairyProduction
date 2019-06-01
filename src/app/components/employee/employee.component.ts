import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/Employee';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { GlobalErrorService } from 'src/app/shared/error/global-error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{

  // public displayedColumns = ['name', 'email', 'phoneNumber', 'role', 'update', 'Remove'];
  // public dataSource = new MatTableDataSource<Employee>(); 

  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // constructor(private employeeService: EmployeeService, private errorService: GlobalErrorService, private router: Router) { }

  // ngOnInit() {
  //   this.getAllEmployees();
  // }

  // ngAfterViewInit(): void {
  //    this.dataSource.sort = this.sort;
  //    this.dataSource.paginator = this.paginator;
  // }

  // public getAllEmployees = () => {
  //   this.employeeService.getEmployeesList()
  //   .subscribe(res => {
  //     this.dataSource.data = res as Employee[];
  //   },
  //   (error) => {
  //     this.errorService.handleError(error);
  //   })
  // }

  // public doFilter = (value: string) => {
  //   this.dataSource.filter = value.trim().toLocaleLowerCase();
  // }

  // public redirectToDetails = (id: string) => {
  //   let url: string = `/employee/${id}`;
  //   this.router.navigate([url]);
  // }

  // public redirectToUpdate = (id: string) => {
    
  // }

  // public redirectToDelete = (id: string) => {
    
  // }

  constructor() { }

  ngOnInit() {
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }
}
