import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelFacturasComponent } from './componentes/panel-facturas/panel-facturas.component';
import { NuevaFacturaComponent } from './componentes/nueva-factura/nueva-factura.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [PanelFacturasComponent, NuevaFacturaComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GastosModule { }
