import {AppState} from "./states";

export const selectTeachers = (state: AppState) => state.teachers.teachers.teachers;
export const selectStudents = (state:AppState)=>state.students.students;

export const selectTeachersLoaded = (state: AppState) => state.teachers.loaded;
export const selectStudentsLoaded = (state: AppState) => state.teachers.loaded;
