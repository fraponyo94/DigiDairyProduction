import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalfService } from 'src/app/services/calf.service';
import { MessagesService } from 'src/app/services/services/messages-service/messages.service';

@Component({
  selector: 'app-calf',
  templateUrl: './calf.component.html',
  styleUrls: ['./calf.component.css']
})
export class CalfComponent implements OnInit {
  private calfForm: FormGroup;
  constructor( private fb: FormBuilder,private calfService: CalfService,private messagesService: MessagesService) { }

  ngOnInit() {
  }

  // Create calf addition form
  private createCalfForm() {

    this.calfForm = this.fb.group({
      cowTag: ['', Validators.required],
      name: ['', Validators.required],
      breed: this.fb.group({
       name: ['']
      }),
      dateAcquired: []

    });

}
}