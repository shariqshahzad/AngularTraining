import { Component, OnInit } from '@angular/core';
import { StudentModel } from './student-model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  selectedStudent: StudentModel;

  students: StudentModel[];

  constructor() { }

  ngOnInit(): void {
    this.selectedStudent = new StudentModel();
    this.students = [
      { studentName: "Shariq", age: 12 },
      { studentName: "Khizar", age: 17 },
      { studentName: "Marib", age: 16 },
      { studentName: "Waqas", age: 14 }
    ];
  }

  onClickEdit(student: StudentModel) {
    this.selectedStudent = student;
  }

}
