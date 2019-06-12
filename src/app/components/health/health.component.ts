import { Component, OnInit } from '@angular/core';
import { HealthService } from 'src/app/services/health/health.service';
import { CattleService } from 'src/app/services/cattle/cattle.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { cattle } from 'src/app/models/cattles/cattle';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private f: FormBuilder , private cattleService: CattleService, private healthService: HealthService) { }

  //
  healthForm: FormGroup;
  filteredOptions: cattle[];

  // Create form control names
  createhealthForm() {
    this.healthForm = this.f.group({     
      date: [],
      history: [''],
      symptoms: [''],
      diagnosis: [''],
      treatment: [''],
      nameOfVeterinaryDoctor: [''],
      contactofVeterinaryDoctor: [],
      costOfTreatMent: []

    });
  }

  ngOnInit() {
    this.createhealthForm();
    this.filteredOptions = [];
  }

  // process milking form
  onSubmit() {

  }
}
