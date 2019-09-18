import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteHistoricoComponent } from './docente-historico.component';

describe('DocenteHistoricoComponent', () => {
  let component: DocenteHistoricoComponent;
  let fixture: ComponentFixture<DocenteHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocenteHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
