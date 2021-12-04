import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {addTeacher} from "../../../shared/actions";
import {Teacher} from "../../../models";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-teacher-form',
  templateUrl: './add-teacher-form.component.html',
  styleUrls: ['./add-teacher-form.component.scss']
})
export class AddTeacherFormComponent implements OnInit {

  constructor(public readonly store:Store) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm) {
    const teacher:Teacher = {firstName:f.value.first,lastName:f.value.last};
    this.store.dispatch(addTeacher(teacher))
  }

}
