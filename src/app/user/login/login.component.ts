import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  showAlert = false;
  alertMsg = 'Please wait! Your account is being created.';
  alertColor = 'blue';

  login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! Your account is being logged in.';
    this.alertColor = 'blue';
  }
}
