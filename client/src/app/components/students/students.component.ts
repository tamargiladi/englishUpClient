import {Component, OnInit} from '@angular/core';
import {Student} from "../../models";
import {StudentsService} from "../../services/students.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../shared/states";
import {loadStudents} from "../../shared/actions";
import {selectStudents, selectStudentsLoaded} from "../../shared/selectors";
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[] = []
  selectedStudent: Student | any;
  isLoaded: boolean = false;

  constructor(private readonly store: Store<AppState>) {

  }

  cols: any[] | undefined;
  exportColumns: any[] | undefined;

  ngOnInit() {
    this.cols = [
      {field: "firstName", header: "First Name"},
      {field: "lastName", header: "Last Name"},
    ];
    this.store.dispatch(loadStudents());


    this.store.select(selectStudentsLoaded)
      .subscribe((loaded: boolean) => {
        console.log("students loaded:",loaded);
          this.isLoaded=true;
      });

    if(this.isLoaded) {
      this.store.select(selectStudents)
        .subscribe(
          students => this.students = students);

      console.log("STUDENTS:", this.students);
    }

  }

}
