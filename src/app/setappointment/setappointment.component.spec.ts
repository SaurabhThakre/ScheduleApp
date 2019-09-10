import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetappointmentComponent } from './setappointment.component';

describe('SetappointmentComponent', () => {
  let component: SetappointmentComponent;
  let fixture: ComponentFixture<SetappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
