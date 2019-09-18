import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoHistoricoComponent } from './empleado-historico.component';

describe('EmpleadoHistoricoComponent', () => {
  let component: EmpleadoHistoricoComponent;
  let fixture: ComponentFixture<EmpleadoHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadoHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
