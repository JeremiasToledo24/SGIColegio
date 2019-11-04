import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAgregarDetalleFacturaComponent } from './dialog-agregar-detalle-factura.component';

describe('DialogAgregarDetalleFacturaComponent', () => {
  let component: DialogAgregarDetalleFacturaComponent;
  let fixture: ComponentFixture<DialogAgregarDetalleFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAgregarDetalleFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAgregarDetalleFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
