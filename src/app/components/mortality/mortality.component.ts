import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CattleService } from 'src/app/services/cattle/cattle.service';
import { MilkingService } from 'src/app/services/milking/milking.service';
import { cattle } from 'src/app/models/cattles/cattle';
import { MortalityService } from 'src/app/services/mortality.service';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { MessagesService } from 'src/app/services/services/messages-service/messages.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mortality',
  templateUrl: './mortality.component.html',
  styleUrls: ['./mortality.component.css']
})
export class MortalityComponent implements OnInit {

  constructor(private f: FormBuilder , private cattleService: CattleService, private mortalityService: MortalityService,
              private datePipe: DatePipe, private messagesService: MessagesService) { }

  //
  mortalityForm: FormGroup;
  cattles: Observable<cattle>;

  // Create form control names
  createMortalityForm() {
    this.mortalityForm = this.f.group({
      cow: this.f.group({
        cowTag: ['',Validators.required]
      }),
      postMortemReport: [''],
      findings: [''],
      date: []
      
    });
  }

  ngOnInit() {
    this.createMortalityForm();
    this.getCattles();
  }

  // process mortality form
  onSubmit() {
    if (this.mortalityForm.invalid) {
      return;
    } else {
    const formData = this.mortalityForm.value;
    formData.date = this.datePipe.transform(this.mortalityForm.controls.date.value, "dd-MM-yyyy");   
    console.log(JSON.stringify(formData));

    this.mortalityService.addMortalityRecords(formData)  
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

    
// get cattles available for autocomplete functionality
getCattles(): void {
  this.cattles = this.cattleService.getAllCattleRecords();
}


  // Reset form
  reset(){
    this.mortalityForm.reset();
  }


  
  private success() {
    this.messagesService.openDialog('Success', ' Saved successfully!');
  }

  private handleError(error) {
    this.messagesService.openDialog('Error', 'Error saving,Please contact the system administrator.');
  }

}
