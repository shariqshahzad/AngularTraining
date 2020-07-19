import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../user-model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonModel } from '../form-with-validation/person-model';
import { Router } from '@angular/router';
import * as users from '../../users/users.json';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;
  userForm: FormGroup;

  get username() { return this.userForm.get('username'); }
  get password() { return this.userForm.get('password'); }

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      this.router.navigate(['dashboard'])
    }
  }

  createForm() {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }






}
