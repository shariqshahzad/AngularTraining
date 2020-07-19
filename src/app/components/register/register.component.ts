import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;

  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }

  constructor(private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.registerService.register(this.userForm.getRawValue()).subscribe(res => {
      this.router.navigate(['login'])
    }, err => {
      if (err instanceof HttpErrorResponse) {
        console.error(err.error.error);
      }
    })
  }
}