import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
@Injectable()
export class LoginEffects {

  constructor(public readonly actions$: Actions) {
  }


}
