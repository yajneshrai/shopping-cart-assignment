import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup | any;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }
  
  initForm() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('', [Validators.minLength(6), Validators.pattern('[A-Za-z]')]),
      password2: new FormControl('', [Validators.minLength(6), Validators.pattern('[A-Za-z]')])
    });
  }
  

  signup() {
    console.log(this.signupForm.value);
  }
}


/* function passwordMatchValidator(ab: AbstractControl) {
  if(ab.get('password').value != ab.get('password2').value)
    return true;
  return false;
} */