import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaPDFComponent } from './factura-pdf.component';

describe('FacturaPDFComponent', () => {
  let component: FacturaPDFComponent;
  let fixture: ComponentFixture<FacturaPDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaPDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
