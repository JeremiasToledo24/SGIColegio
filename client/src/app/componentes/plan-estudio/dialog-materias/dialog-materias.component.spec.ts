import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMateriasComponent } from './dialog-materias.component';

describe('DialogMateriasComponent', () => {
  let component: DialogMateriasComponent;
  let fixture: ComponentFixture<DialogMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
