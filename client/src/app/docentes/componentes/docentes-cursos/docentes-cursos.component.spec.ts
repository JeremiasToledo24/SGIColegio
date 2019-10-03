import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentesCursosComponent } from './docentes-cursos.component';

describe('DocentesCursosComponent', () => {
  let component: DocentesCursosComponent;
  let fixture: ComponentFixture<DocentesCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentesCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentesCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
