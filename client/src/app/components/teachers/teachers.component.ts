import {Component, OnInit} from '@angular/core';
import {Teacher} from "../../models";
import {TeachersService} from "../../services/teachers.service";
import {loadTeachers, teachersLoaded} from "../../shared/actions";
import {selectLoaded, selectTeachers} from "../../shared/selectors";
import {Store} from "@ngrx/store";
import {AppState, TeachersState} from "../../shared/states";


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers: any[] = [];
  isLoaded: boolean = false;

  constructor(private state: Store<AppState>) {
  }

  ngOnInit() {
    this.state.dispatch(loadTeachers());
    // this.state.select(s => s).subscribe(s => console.log(s))
    this.state.select(selectLoaded)
      .subscribe((loaded: boolean) => {
        this.isLoaded = loaded;
      })
    this.state.select(selectTeachers)
      .subscribe(
        teachers => this.teachers = teachers);
  }


}
