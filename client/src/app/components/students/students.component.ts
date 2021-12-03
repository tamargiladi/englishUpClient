import { Component, OnInit } from '@angular/core';
import {Student} from "../../models";
import {StudentsService} from "../../services/students.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students:Student[] = []
  selectedStudent:Student | any;


  constructor(private readonly service:StudentsService) {
    this.students = this.service.loadAllStudents();
    console.log("students:",this.students);
  }

  cols: any[] | undefined;
  exportColumns: any[] | undefined;

  ngOnInit(): void {
    this.cols = [
      { field: "firstName", header: "First Name" },
      { field: "lastName", header: "Last Name" },
    ];



  }

}
