import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, tap} from "rxjs/operators";
import {studentsLoaded, teachersLoaded} from "../shared/actions";
import {HttpClient} from "@angular/common/http";
import {Student, Teacher, TeachersPayload} from "../models";

@Injectable()
export class StudentsEffects {

  constructor(public readonly actions$: Actions,
              public readonly http: HttpClient) {
  }

  students$ = createEffect (()=> this.actions$.pipe(
    ofType('LoadStudents'),
    mergeMap(()=>this.http.get<Student[]>('http://localhost:3000/api/students')),
    tap(students=>{
      console.log("students$:",students)}),
    map(students => studentsLoaded({studentsPayload:students} ))
  ));





}
