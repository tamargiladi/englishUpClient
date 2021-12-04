import { createReducer, on } from '@ngrx/store';
import {addTeacher, loadTeachers, teacherAdded, teachersLoaded} from "../shared/actions";
import {TeachersState} from "../shared/states";
import {Teacher, TeachersPayload} from "../models";


export const teachersReducer = createReducer<TeachersState> (
  {teachers:{teachers:[]},loaded:false,loading:false},
  on(loadTeachers, (state:TeachersState)=>({...state,loaded:false,loading:true})),
  on(teachersLoaded, (state:TeachersState,teachers:TeachersPayload)=>({
    ...state,
    teachers,
    loaded:true,loading:false})),

  on(addTeacher,(state:TeachersState)=>({
    ...state,
      loading:true,
      })),
  on(addTeacher,(state:TeachersState,teacher)=>({
    ...state,
      loading:false,
      teachers:{teachers:[...state.teachers.teachers,teacher]}
      }))
  );


