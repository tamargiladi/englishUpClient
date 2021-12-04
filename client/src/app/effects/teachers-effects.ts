import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, tap} from "rxjs/operators";
import {teacherAdded, teachersLoaded} from "../shared/actions";
import {HttpClient} from "@angular/common/http";
import {Teacher, TeachersPayload} from "../models";

@Injectable()
export class TeachersEffects {

  constructor(public readonly actions$: Actions,
              public readonly http: HttpClient) {
  }

  teachers$ = createEffect (()=> this.actions$.pipe(
    ofType('LoadTeachers'),
    mergeMap(()=>this.http.get<Teacher[]>('http://localhost:3000/api/teachers')),
    tap(teachers=>{
      console.log("LoadTeachers:",teachers)}),
    map(teachers => teachersLoaded({teachers} ))
  ));

  addTeachers$ = createEffect (()=> this.actions$.pipe(
    ofType('AddTeacher'),
    tap((teacher:Teacher)=>(console.log(teacher))),
    mergeMap((teacher:Teacher)=>this.http.post<Teacher>('http://localhost:3000/api/teachers',{firstName:teacher.firstName,lastName:teacher.lastName})),
    tap(teacher=>{
      console.log("Add Teacher:",teacher)}),
    map(teacher => teacherAdded(teacher))
  ));
}




