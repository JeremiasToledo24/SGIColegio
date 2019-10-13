import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCursoSecundariaComponent } from './alumno-curso-secundaria.component';

describe('AlumnoCursoSecundariaComponent', () => {
  let component: AlumnoCursoSecundariaComponent;
  let fixture: ComponentFixture<AlumnoCursoSecundariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoCursoSecundariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoCursoSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
