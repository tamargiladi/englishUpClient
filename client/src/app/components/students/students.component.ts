import { Component, OnInit } from '@angular/core';
import {Student} from "../../models";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students:Student[] = [
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'TamarTamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
    {firstName:'Tamar',lastName:'Giladi'},
  ]
  selectedStudent:Student | any;


  constructor() { }

  cols: any[] | undefined;
  exportColumns: any[] | undefined;

  ngOnInit(): void {
    this.cols = [
      { field: "firstName", header: "First Name" },
      { field: "lastName", header: "Last Name" },
    ];

  }

}
