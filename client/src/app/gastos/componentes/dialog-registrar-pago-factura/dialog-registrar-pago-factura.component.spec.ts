import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRegistrarPagoFacturaComponent } from './dialog-registrar-pago-factura.component';

describe('DialogRegistrarPagoFacturaComponent', () => {
  let component: DialogRegistrarPagoFacturaComponent;
  let fixture: ComponentFixture<DialogRegistrarPagoFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogRegistrarPagoFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogRegistrarPagoFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
