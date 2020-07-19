import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithValidationComponent } from './form-with-validation.component';

describe('FormWithValidationComponent', () => {
  let component: FormWithValidationComponent;
  let fixture: ComponentFixture<FormWithValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
