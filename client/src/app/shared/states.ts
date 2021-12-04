import {Student, StudentsPayload, TeachersPayload} from "../models";

export interface LoginState  {
  logged:boolean;
}

export interface TeachersState {
  teachers:TeachersPayload;
  loading:boolean;
  loaded:boolean;
}

export interface StudentsState {
  students:Student[]
  loading:boolean;
  loaded:boolean;
}

export interface UiState {
  tabLocation:number;
}

export interface AppState {
  login: LoginState;
  students: StudentsState;
  teachers: TeachersState;
}
