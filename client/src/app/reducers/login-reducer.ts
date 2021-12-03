import { createReducer, on } from '@ngrx/store';
import {login} from "../shared/actions";
import {LoginState} from "../shared/states";


export const loginReducer = createReducer<LoginState> (
  {logged:true},
  on(login, (state:LoginState)=>({...state,logged:true})),
);
