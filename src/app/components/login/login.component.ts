import { Component, OnInit, ViewChild } from '@angular/core';
import { UserModel } from '../user-model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    this.userForm.markAllAsTouched();
    if (this.userForm.valid) {
      this.loginService.login(this.userForm.getRawValue()).subscribe(res => {

        this.router.navigate(['dashboard'])
      },err=>
      {
        if(err instanceof HttpErrorResponse)
        {
          console.error(err.error.error);
        }

      })
    }
  }
  onClickRegister()
  {
    this.router.navigate(['register']);
  }

  createForm() {
    this.userForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }






}
