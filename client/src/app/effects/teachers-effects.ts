import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {map, mergeMap} from "rxjs/operators";
import {teachersLoaded} from "../shared/actions";
import {HttpClient} from "@angular/common/http";
import {TeachersPayload} from "../models";
@Injectable()
export class LoginEffects {

  constructor(public readonly actions$: Actions,
              public readonly http: HttpClient) {
  }

  teachers$ = this.actions$.pipe(()=> (
  ofType('')
  ));


}
