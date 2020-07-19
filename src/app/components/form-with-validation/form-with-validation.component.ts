import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonModel } from './person-model';

@Component({
  selector: 'app-form-with-validation',
  templateUrl: './form-with-validation.component.html',
  styleUrls: ['./form-with-validation.component.scss']
})
export class FormWithValidationComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  persons: PersonModel[] = [];
  selectedPerson: PersonModel;
  personForm : FormGroup;

  get name() { return this.personForm.get('name'); }
  get age() { return this.personForm.get('age'); }
  get country() { return this.personForm.get('country'); }

  constructor() { }

  ngOnInit(): void {
    this.createForm();
    this.selectedPerson = new PersonModel();
  }

  onSubmit() {
    this.personForm.markAllAsTouched();
    if(this.personForm.valid)
    {
      this.persons.push(this.personForm.getRawValue());
      this.createForm();
    }
  }

  createForm() {
    this.personForm = new FormGroup({
      name: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      age: new FormControl('',[Validators.required,Validators.min(18)]),
      active : new FormControl(false)
    });
  }






}
