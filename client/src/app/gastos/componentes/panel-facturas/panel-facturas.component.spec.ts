import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFacturasComponent } from './panel-facturas.component';

describe('PanelFacturasComponent', () => {
  let component: PanelFacturasComponent;
  let fixture: ComponentFixture<PanelFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
