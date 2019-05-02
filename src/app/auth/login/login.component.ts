import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  navbar: Boolean = false;

  constructor() { }

  ngOnInit() {
    this.navbar = true;
  }

}
