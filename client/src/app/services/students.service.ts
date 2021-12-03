import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {loadTeachers} from "../shared/actions";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  state:any;
  constructor(public readonly store:Store) {}

  loadAllStudents() {
      this.store.dispatch(loadTeachers());
      this.store.select((s:any)=>s)
        .subscribe(
          s=>this.state = s);
      return this.state.students.studentsPayload.students;

  }
}
