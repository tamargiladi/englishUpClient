import {createReducer, on} from '@ngrx/store';
import {loadStudents, studentsLoaded} from "../shared/actions";
import {StudentsPayload} from "../models";
import {StudentsState} from "../shared/states";


export const studentsReducer = createReducer<StudentsState> (
  {students:{studentsPayload:[]},loaded:true,loading:false},
  on(loadStudents, (state:StudentsState)=>({...state,loaded:false,loading:true})),
  on(studentsLoaded, (state:StudentsState,studentsPayload:StudentsPayload)=>
    ({
    ...state,
    studentsPayload,
    loaded:true,loading:false}))

);
