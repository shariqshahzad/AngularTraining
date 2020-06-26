import { Component, OnInit } from '@angular/core';
import { SignupModel } from './signup-model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  public signUpModel : SignupModel = new SignupModel();
  constructor() { }

  ngOnInit(){
  }

  onFormSubmit()
  {
    console.log(this.signUpModel);
  }
}
