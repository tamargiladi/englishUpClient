import { Component, OnInit } from '@angular/core';
import {login} from "../../shared/actions";
import {Store} from "@ngrx/store";
import {LoginState} from "../../shared/states";

@Component({
  selector: 'app-login-feature',
  templateUrl: './login-feature.component.html',
  styleUrls: ['./login-feature.component.scss']
})
export class LoginFeatureComponent  {

  constructor(public readonly store:Store<LoginState>) {

  }



}
