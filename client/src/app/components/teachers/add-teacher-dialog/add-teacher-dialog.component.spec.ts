import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeacherDialogComponent } from './add-teacher-dialog.component';

describe('AddTeacherDialogComponent', () => {
  let component: AddTeacherDialogComponent;
  let fixture: ComponentFixture<AddTeacherDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTeacherDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeacherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
