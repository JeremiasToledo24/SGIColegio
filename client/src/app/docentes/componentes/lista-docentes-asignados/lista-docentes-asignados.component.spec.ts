import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDocentesAsignadosComponent } from './lista-docentes-asignados.component';

describe('ListaDocentesAsignadosComponent', () => {
  let component: ListaDocentesAsignadosComponent;
  let fixture: ComponentFixture<ListaDocentesAsignadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDocentesAsignadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDocentesAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
