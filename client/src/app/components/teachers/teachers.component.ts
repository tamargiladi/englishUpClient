import { Component, OnInit } from '@angular/core';
import {Teacher} from "../../models";
@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {


  teachers: Teacher[]  = [
    {
      firstName:'Tamar',
      lastName:'Giladi',
      info:'sldfhls',
      notifications:1
    },
    {
      firstName:'Shoshana',
      lastName:'Damari',
      info:'At a young age, Damari played drums and sang accompaniment for her mother, who performed at family celebrations and gatherings of the Yemenite community in Palestine.[2] At age 14, her first songs were broadcast on the radio.[3] She studied singing and acting at the Shulamit Studio in Tel Aviv, where she met Shlomo Bosmi, the studio manager who became her personal manager. They wed in 1939, when she was only 16.',
      notifications:6
    },
    {
      firstName:'Alex',
      lastName:'R',
      info:'Students',
      notifications:2
    },
    {
      firstName:'Alex',
      lastName:'R',
      info:'Students',
      notifications:2
    },
    {
      firstName:'Alex',
      lastName:'R',
      info:'Students',
      notifications:2
    },
  ]

  constructor() {
  }
  ngOnInit() {

  }

}
