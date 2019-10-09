import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodosPrimariaComponent } from './periodos-primaria.component';

describe('PeriodosPrimariaComponent', () => {
  let component: PeriodosPrimariaComponent;
  let fixture: ComponentFixture<PeriodosPrimariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodosPrimariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodosPrimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
