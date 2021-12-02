import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../../models";

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.scss']
})
export class TeacherInfoComponent {

  teacher:Teacher = {firstName:'Efrat', lastName:'Giladi'};




}
