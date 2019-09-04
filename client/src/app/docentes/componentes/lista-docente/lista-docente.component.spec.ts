import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListaDocenteComponent} from './lista-docente.component';

describe('ListaDocenteComponent', () => {
  let component: ListaDocenteComponent;
  let fixture: ComponentFixture<ListaDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDocenteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
