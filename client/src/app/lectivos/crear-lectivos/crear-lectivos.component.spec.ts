import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLectivosComponent } from './crear-lectivos.component';

describe('CrearLectivosComponent', () => {
  let component: CrearLectivosComponent;
  let fixture: ComponentFixture<CrearLectivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearLectivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearLectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
