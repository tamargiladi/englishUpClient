import {UiState} from "../shared/states";
import {createReducer} from "@ngrx/store";
import {loadUi} from "../shared/actions";


export const UiReducer = createReducer<UiState> (
  {tabLocation:0},
  on(loadUi,(state:UiState)=>{...state,})

)
