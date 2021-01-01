import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import {  UserInterface } from 'src/app/models/users-model';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  test : string ='NEMESIS';
  error : any;

  constructor(
    // private auth:AuthService,
    private router:Router,
    ) { }
  
  ngOnInit(): void {}
  
  //emailFormControl = new FormControl('', [ Validators.required, Validators.email,]);

  matcher = new MyErrorStateMatcher();

  onLogin() {
    return this.router.navigate(['./home']);  
  }

}

