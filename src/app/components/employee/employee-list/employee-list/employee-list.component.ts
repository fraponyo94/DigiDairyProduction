import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Employee } from 'src/app/models/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { GlobalErrorService } from 'src/app/shared/error/global-error.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit,AfterViewInit {

  public displayedColumns = ['name', 'email', 'phoneNumber', 'role', 'update', 'Remove'];
  public dataSource = new MatTableDataSource<Employee>(); 

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private employeeService: EmployeeService, private errorService: GlobalErrorService, private router: Router) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }

  public getAllEmployees = () => {
    this.employeeService.getEmployeesRecords()
    .subscribe(res => {      
      this.dataSource.data = res._embedded.results;; 

    },
    (error) => {
      this.errorService.handleError(error);
    })
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/employee/${id}`;
    this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    
  }

  public redirectToDelete = (id: string) => {
    
  }

}
