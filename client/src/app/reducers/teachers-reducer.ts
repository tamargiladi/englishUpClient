import { createReducer, on } from '@ngrx/store';
import {loadTeachers, teachersLoaded} from "../shared/actions";
import {TeachersState} from "../shared/states";


export const teachersReducer = createReducer<TeachersState> (
  {loaded:true,loading:false},
  on(loadTeachers, (state:TeachersState)=>({...state,loaded:false,loading:true})),
  on(teachersLoaded, (state:TeachersState)=>({...state,loaded:true,loading:false}))

);
