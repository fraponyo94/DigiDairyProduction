import { Component, OnInit } from '@angular/core';
import { MilkingService } from 'src/app/services/milking/milking.service';
import { CattleService } from 'src/app/services/cattle/cattle.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cattle } from 'src/app/models/cattles/cattle';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { MessagesService } from 'src/app/services/services/messages-service/messages.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-milking',
  templateUrl: './milking.component.html',
  styleUrls: ['./milking.component.css']
})
export class MilkingComponent implements OnInit {
  constructor(private f: FormBuilder , private cattleService: CattleService,
              private milkingService: MilkingService, private datePipe: DatePipe, private messagesService: MessagesService ) { }  

  // Variables
  milkingForm: FormGroup;
  cattles: Observable<cattle>;

  // Create form control names
  createMilkingForm() {
    this.milkingForm = this.f.group({      
        cow: this.f.group({
                  cowTag: ['',Validators.required]
        }),

      date: ['',Validators.required],
      firstMilking: ['',Validators.required],
      secondMilking: [''],
      otherMilking: ['']
      // unitsSold: [''],
      // pricePerUnit: ['']
    });
  }

  ngOnInit() {
    this.createMilkingForm(); 
    this.getCattles();
  }

  
// get cattles available for autocomplete functionality
getCattles(): void {
  this.cattles = this.cattleService.getAllCattleRecords();
}


  // process milking form
  onSubmit() {
    if (this.milkingForm.invalid) {
      return;
    } else {
    const formData = this.milkingForm.value;
    formData.date = this.datePipe.transform(this.milkingForm.controls.date.value, "dd-MM-yyyy");   
    console.log(JSON.stringify(formData));

    this.milkingService.addMilkingRecords(formData)  
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
    this.milkingForm.reset();
  }


  
  private success() {
    this.messagesService.openDialog('Success', ' Saved successfully!');
  }

  private handleError(error) {
    this.messagesService.openDialog('Error', 'Error saving,Please contact the system administrator.');
  }


}
