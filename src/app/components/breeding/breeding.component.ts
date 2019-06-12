import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CattleService } from 'src/app/services/cattle/cattle.service';
import { cattle } from 'src/app/models/cattles/cattle';
import {Observable, } from 'rxjs';

import { DatePipe } from '@angular/common';
import { MessagesService } from 'src/app/services/services/messages-service/messages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BreedingService } from 'src/app/services/breeding.service';

@Component({
  selector: 'app-breeding',
  templateUrl: './breeding.component.html',
  styleUrls: ['./breeding.component.css']
})
export class BreedingComponent implements OnInit {
  cattles: Observable<cattle>;
  isCowSelected = false;
  cattleForm: FormGroup;
  breedingForm: FormGroup;

  // For autocomplete
  cow = new FormControl();

  options: cattle[];
  filteredOptions: Observable<cattle[]>;

  private _filter(value: string): cattle[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.cowTag.toLowerCase().indexOf(filterValue) === 0);
  }


  constructor(private f: FormBuilder, private cattleService: CattleService, private breedingService: BreedingService,
              private datePipe: DatePipe, private messagesService: MessagesService ) {
    // this.cattleForm = this.f.group({
    //        cattles: ['']
    // });


   }


  ngOnInit() {
    this.createBreedingForm();

    this.getCattles();

  }



// get cattles available for autocomplete functionality
  getCattles(): void {
    this.cattles = this.cattleService.getAllCattleRecords();
  }



  // Create form control names
  createBreedingForm() {
    this.breedingForm = this.f.group({
      cow: this.f.group({
                cowTag: ['',Validators.required]
      }),

      date: [''],
      dueDate: [''],
      methodOfInsemination: [''],
      reproductiveCondition: [''],
      reproductiveTreatment: ['']
    });
  }


  // Show input form when corresponding co is selected
  proceed(): void {
    this.isCowSelected = true;

  }

  onSubmit() {
    if (this.breedingForm.invalid) {
      return;
    } else {
    const formData = this.breedingForm.value;
    formData.date = this.datePipe.transform(this.breedingForm.controls.date.value, "dd-MM-yyyy");
    formData.dueDate = this.datePipe.transform(this.breedingForm.controls.dueDate.value, "dd-MM-yyyy");
    console.log(JSON.stringify(formData));

    this.breedingService.addBreeding(formData)  
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

    this.breedingForm.reset();
    }

  }

  reset(){

  }


  private success() {
    this.messagesService.openDialog('Success', ' Saved successfully!');
  }

  private handleError(error) {
    this.messagesService.openDialog('Error', 'Error saving,Please contact the system administrator.');
  }

}
