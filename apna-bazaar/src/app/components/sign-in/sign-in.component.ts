import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm | any;

  constructor() { }

  ngOnInit(): void {
  }


  login() {
    console.log(this.loginForm.value);
  }
}
