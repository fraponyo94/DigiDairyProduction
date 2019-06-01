


import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMatcherService, errorMessages } from 'src/app/services/services/form-validation/form-validators.service';
import { MatSlideToggle } from '@angular/material';




@Component({
  selector: 'app-add-edit-form',  
  templateUrl: './add-edit-form.component.html',
  styleUrls:['./add-edit-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AddEditFormComponent implements OnInit {

  showRoles = false;

  public addEditEmployeeForm: FormGroup;


  public matcher = new ErrorMatcherService();
  errors = errorMessages;  // Used on form html.
 
 



  public formErrors = {
     employeeId: '',
     name: '',
     email: '',
     phoneNumber: '',
     dateOfEmployment:''   

  };



  constructor(
   private fb: FormBuilder
   
  ) {
    
  }

  ngOnInit() {
    this.createForm();
    
  }


  // The reactive model that is bound to the form.

  private createForm() {
    this.addEditEmployeeForm = this.fb.group({
      employeeId: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      dateOfEmployment: [new Date()],
    
    });
  }

 
  
}



