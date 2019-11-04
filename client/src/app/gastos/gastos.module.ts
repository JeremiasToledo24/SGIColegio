import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelFacturasComponent } from './componentes/panel-facturas/panel-facturas.component';
import { NuevaFacturaComponent } from './componentes/nueva-factura/nueva-factura.component';
import { MaterialModule } from '../material/material.module';
import { DialogAgregarDetalleFacturaComponent } from './componentes/dialog-agregar-detalle-factura/dialog-agregar-detalle-factura.component';



@NgModule({
  declarations: [PanelFacturasComponent, NuevaFacturaComponent, DialogAgregarDetalleFacturaComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GastosModule { }
