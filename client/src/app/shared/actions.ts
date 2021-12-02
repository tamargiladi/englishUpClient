import { createAction, props } from '@ngrx/store';
import {TeachersPayload} from "../models";

export const login = createAction('Login');



//Teachers actions
export const loadTeachers = createAction('LoadTeachers');
export const teachersLoaded = createAction('TeachersLoaded',props<TeachersPayload>());
