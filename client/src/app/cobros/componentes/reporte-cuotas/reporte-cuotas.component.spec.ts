import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCuotasComponent } from './reporte-cuotas.component';

describe('ReporteCuotasComponent', () => {
  let component: ReporteCuotasComponent;
  let fixture: ComponentFixture<ReporteCuotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteCuotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCuotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
