import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {TeachersState} from "../shared/states";

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  state:any;
  teachersState:TeachersState = {teachers:{teachers:[]},loading:false,loaded:false};
  constructor(public readonly store:Store) {

  }


}
