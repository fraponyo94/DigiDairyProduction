import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CattleService } from 'src/app/services/cattle/cattle.service';
import { HealthService } from 'src/app/services/health/health.service';
import { Observable } from 'rxjs';
import { cattle } from 'src/app/models/cattles/cattle';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MessagesService } from 'src/app/services/services/messages-service/messages.service';

@Component({
  selector: 'app-cattle-health',
  templateUrl: './cattle-health.component.html',
  styleUrls: ['./cattle-health.component.css']
})
export class CattleHealthComponent implements OnInit {
  cattleHealthForm: FormGroup;
  cattles: Observable<cattle>;

  constructor(private f: FormBuilder , private cattleService: CattleService,
              private healthService: HealthService, private datePipe: DatePipe,private messagesService: MessagesService) { }

  ngOnInit() {
    this.createhealthForm();
    this.getCattles();
  }



   // Create form control names
   createhealthForm() {
    this.cattleHealthForm = this.f.group({ 
      cowhealth: this.f.group({
        cowTag: ['',Validators.required]
      }),    
      date: [],
      history: [''],
      symptoms: [''],
      diagnosis: [''],
      treatment: [''],
      remarks: [''],
      nameOfveterinaryDoctor: [''],
      contactofVeterinaryDoctor: [],
      costOfTreatMent: [],
 
    });
  }

     
// get cattles available for autocomplete functionality
    getCattles(): void {
          this.cattles = this.cattleService.getAllCattleRecords();
}


  reset(){
   this.cattleHealthForm.reset(); 
  }

  //Process form
  onSubmit(){
    if (this.cattleHealthForm.invalid) {
      return;
    } else {
    const formData = this.cattleHealthForm.value;
    formData.date = this.datePipe.transform(this.cattleHealthForm.controls.date.value, "dd-MM-yyyy");   
    console.log(JSON.stringify(formData));

    this.healthService.addHealthRecords(formData)  
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


  
  private success() {
    this.messagesService.openDialog('Success', ' Saved successfully!');
  }

  private handleError(error) {
    this.messagesService.openDialog('Error', 'Error saving,Please contact the system administrator.');
  }



}
