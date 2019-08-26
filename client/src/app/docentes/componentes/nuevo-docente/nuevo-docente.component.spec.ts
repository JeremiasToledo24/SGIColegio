import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NuevoDocenteComponent} from './nuevo-docente.component';

describe('NuevoDocenteComponent', () => {
  let component: NuevoDocenteComponent;
  let fixture: ComponentFixture<NuevoDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoDocenteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
