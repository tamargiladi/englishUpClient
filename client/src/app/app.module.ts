import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {HomeComponent} from './components/home/home.component';
import {TeachersComponent} from './components/teachers/teachers.component';
import { StudentsComponent } from './components/students/students.component';
import {ChartModule} from 'primeng/chart';
import {TableModule} from "primeng/table";
import {FieldsetModule} from 'primeng/fieldset';
import {BadgeModule} from 'primeng/badge';
import { ToastComponent } from './components/toast/toast.component';
import {PanelModule} from 'primeng/panel';
import { TeacherInfoComponent } from './components/teachers/teacher-info/teacher-info.component';
import { LoginFeatureComponent } from './features/login-feature/login-feature.component';
import { LoginComponent } from './components/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { SettingsComponent } from './settings/settings.component';
import { SettingsButtonComponent } from './settings/settings-button/settings-button.component';
import { StoreModule } from '@ngrx/store';
import {loginReducer} from "./reducers/login-reducer";
import {teachersReducer} from "./reducers/teachers-reducer";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeachersComponent,
    StudentsComponent,
    ToastComponent,
    TeacherInfoComponent,
    LoginFeatureComponent,
    LoginComponent,
    SettingsComponent,
    SettingsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    MenuModule,
    TabMenuModule,
    BrowserAnimationsModule,
    ChartModule,
    TableModule,
    FieldsetModule,
    BadgeModule,
    PanelModule,
    InputTextModule,
    StoreModule.forRoot({
      login: loginReducer,
      teachers:teachersReducer,
    }),

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
