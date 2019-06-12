import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpensesService } from 'src/app/services/expenses/expenses.service';
import { DatePipe } from '@angular/common';
import { MessagesService } from 'src/app/services/services/messages-service/messages.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenseForm: FormGroup;

  constructor(private f: FormBuilder,private expenseService: ExpensesService,
              private datePipe: DatePipe, private messagesService: MessagesService ) {}

  // Create form
  createExpenseForm() {
    this.expenseForm = this.f.group( {     
      itemName: [''],
      quantity: [],
      pricePerUnit: [],
      remarks: [],
      date: []

    });
  }


  ngOnInit() {
    this.createExpenseForm();
  }


  // Process form data
  onSubmit() {
    if (this.expenseForm.invalid) {
      return;
    } else {
    const formData = this.expenseForm.value;
    formData.date = this.datePipe.transform(this.expenseForm.controls.date.value, 'dd-MM-yyyy');   
    console.log(JSON.stringify(formData));

    this.expenseService.addExpensesRecords(formData)  
      .subscribe(
        res => {
          this.success();

        },
        (err: HttpErrorResponse) => {
          console.log(err.error);
          console.log(err.message);
          this.handleError(err);
        }
      );

    this.reset();
    }

  }

  // Reset form
  reset(){
    this.expenseForm.reset();
  }

  
  private success() {
    this.messagesService.openDialog('Success', ' Saved successfully!');
  }

  private handleError(error) {
    this.messagesService.openDialog('Error', 'Error saving,Please contact the system administrator.');
  }
}
