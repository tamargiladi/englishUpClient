import { createAction, props } from '@ngrx/store';
import {StudentsPayload, Teacher, TeachersPayload} from "../models";

export const login = createAction('Login');



//------Teachers actions
export const loadTeachers = createAction('LoadTeachers');
export const teachersLoaded = createAction('TeachersLoaded',props<TeachersPayload>());

export const addTeacher = createAction('AddTeacher',props<Teacher>());
export const teacherAdded = createAction('TeacherAdded',props<Teacher>());
//Students actions

export const editTeacher = createAction('EditTeacher',props<Teacher>());
export const teacherEdited = createAction('TeacherEdited',props<Teacher>());

export const deleteTeacher = createAction('DeleteTeacher',props<Teacher>());
export const teacherDeleted = createAction('TeacherDeleted',props<Teacher>());



export const loadStudents = createAction('LoadStudents');
export const studentsLoaded = createAction('StudentsLoaded',props<StudentsPayload>());


