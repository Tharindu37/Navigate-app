import {Component, OnInit} from '@angular/core';
import {Data} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title='';

  signUpForm: FormGroup;

  constructor(){

    this.signUpForm= new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)])
    });

  }
  ngOnInit(): void {


  }

  login() {
    
  }
}
