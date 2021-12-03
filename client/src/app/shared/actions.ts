import { createAction, props } from '@ngrx/store';
import {StudentsPayload, TeachersPayload} from "../models";

export const login = createAction('Login');



//Teachers actions
export const loadTeachers = createAction('LoadTeachers');
export const teachersLoaded = createAction('TeachersLoaded',props<TeachersPayload>());


//Students actions
export const loadStudents = createAction('LoadStudents');
export const studentsLoaded = createAction('StudentsLoaded',props<StudentsPayload>());
