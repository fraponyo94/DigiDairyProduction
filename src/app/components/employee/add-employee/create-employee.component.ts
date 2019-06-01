import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatDialog } from '@angular/material';
import { GlobalErrorService } from 'src/app/shared/error/global-error.service';
import { SuccessDialogComponent } from 'src/app/shared/error/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public employeeForm: FormGroup;
  private dialogConfig;



  constructor(private employeeService: EmployeeService, private location: Location,
    private dialog: MatDialog, private errorService: GlobalErrorService) { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(12), Validators.minLength(9)]),
      dateOfEmployment: new FormControl(new Date()),
      email: new FormControl(''),
      isEnabled: new FormControl(false),
      role: new FormControl('')
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.employeeForm.controls[controlName].hasError(errorName);
  }


  public onCancel = () => {
    this.location.back();
  }


  private employeeFormDetails = (employeeFormValue) => {
    let employee = {
      employeeId: employeeFormValue.id,
      name: employeeFormValue.name,
      email: employeeFormValue.email,
      phoneNumber: employeeFormValue.phoneNumber,
      dateOfEmployment: employeeFormValue.dateOfEmployment,

      isEnabled: employeeFormValue.isEnabled,
      role: employeeFormValue.role.roleName
    }

    this.employeeService.createEmployee(employee)
      .subscribe(res => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed()
          .subscribe(result => {
            this.location.back();
          });
      },
        (error => {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
        })
      )

  }

  public createEmployee = (employeeFormValue) => {
    if (this.employeeForm.valid) {
      this.employeeFormDetails(employeeFormValue);
    }
  }




}
