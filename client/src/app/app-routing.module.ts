import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {TeachersComponent} from "./components/teachers/teachers.component";
import {StudentsComponent} from "./components/students/students.component";
import {LoginFeatureComponent} from "./features/login-feature/login-feature.component";
import {SettingsComponent} from "./settings/settings.component";


@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path:'home',component: HomeComponent},
      {path:'teachers', component:TeachersComponent},
      {path:'students', component:StudentsComponent},
      {path:'login', component:LoginFeatureComponent},
      {path:'settings', component:SettingsComponent},
      {path:'', redirectTo:'/home',pathMatch:'full'},
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
