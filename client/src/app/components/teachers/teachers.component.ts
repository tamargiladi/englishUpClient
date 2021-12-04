import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../../models";
import {TeachersService} from "../../services/teachers.service";
import {loadTeachers, teachersLoaded} from "../../shared/actions";
import {selectTeachersLoaded, selectTeachers} from "../../shared/selectors";
import {Store} from "@ngrx/store";
import {AppState, TeachersState} from "../../shared/states";


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers: any[] = [];
  display:boolean = false;

  constructor(private state: Store<AppState>,private service:TeachersService) {
  }

  ngOnInit() {
    //Update dialogbox state

    this.state.dispatch(loadTeachers());
    // this.state.select(s => s).subscribe(s => console.log(s))
    this.state.select(selectTeachersLoaded)
      .subscribe((loaded: boolean) => {
        if(loaded) {
          this.state.select(selectTeachers)
            .subscribe(
              teachers => this.teachers = teachers);
        }
      })


  }
  addTeacher(){
    this.display = true;
  }

}
