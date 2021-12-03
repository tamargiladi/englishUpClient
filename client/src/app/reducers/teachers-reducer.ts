import { createReducer, on } from '@ngrx/store';
import {loadTeachers, teachersLoaded} from "../shared/actions";
import {TeachersState} from "../shared/states";
import {TeachersPayload} from "../models";


export const teachersReducer = createReducer<TeachersState> (
  {teachers:{teachers:[]},loaded:false,loading:false},
  on(loadTeachers, (state:TeachersState)=>({...state,loaded:false,loading:true})),
  on(teachersLoaded, (state:TeachersState,teachers:TeachersPayload)=>({
    ...state,
    teachers,
    loaded:true,loading:false}))

);
