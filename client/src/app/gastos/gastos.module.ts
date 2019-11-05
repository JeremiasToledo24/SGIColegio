import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelFacturasComponent } from './componentes/panel-facturas/panel-facturas.component';
import { NuevaFacturaComponent } from './componentes/nueva-factura/nueva-factura.component';
import { MaterialModule } from '../material/material.module';
import { DialogAgregarDetalleFacturaComponent } from './componentes/dialog-agregar-detalle-factura/dialog-agregar-detalle-factura.component';
import { DetalleFacturaComponent } from './componentes/detalle-factura/detalle-factura.component';
import { DialogRegistrarPagoFacturaComponent } from './componentes/dialog-registrar-pago-factura/dialog-registrar-pago-factura.component';



@NgModule({
  declarations: [PanelFacturasComponent, NuevaFacturaComponent, DialogAgregarDetalleFacturaComponent, DetalleFacturaComponent, DialogRegistrarPagoFacturaComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GastosModule { }
