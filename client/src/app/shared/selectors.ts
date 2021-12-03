import {AppState} from "./states";

export const selectTeachers = (state: AppState) => state.teachers.teachers.teachers;
export const selectLoaded = (state: AppState) => state.teachers.loaded;
