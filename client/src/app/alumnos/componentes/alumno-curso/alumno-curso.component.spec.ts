import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCursoComponent } from './alumno-curso.component';

describe('AlumnoCursoComponent', () => {
  let component: AlumnoCursoComponent;
  let fixture: ComponentFixture<AlumnoCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
