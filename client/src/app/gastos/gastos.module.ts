import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelFacturasComponent } from './componentes/panel-facturas/panel-facturas.component';
import { NuevaFacturaComponent } from './componentes/nueva-factura/nueva-factura.component';
import { MaterialModule } from '../material/material.module';
import { DialogAgregarDetalleFacturaComponent } from './componentes/dialog-agregar-detalle-factura/dialog-agregar-detalle-factura.component';
import { DetalleFacturaComponent } from './componentes/detalle-factura/detalle-factura.component';
import { DialogRegistrarPagoFacturaComponent } from './componentes/dialog-registrar-pago-factura/dialog-registrar-pago-factura.component';
import { EgresosComponent } from './componentes/egresos/egresos.component';
import { ReporteGastosComponent } from './componentes/reporte-gastos/reporte-gastos.component';
import { DeudasComponent } from './componentes/deudas/deudas.component';
import { ReporteDeudasComponent } from './componentes/reporte-deudas/reporte-deudas.component';



@NgModule({
  declarations: [PanelFacturasComponent, NuevaFacturaComponent, DialogAgregarDetalleFacturaComponent, DetalleFacturaComponent, DialogRegistrarPagoFacturaComponent, EgresosComponent, ReporteGastosComponent, DeudasComponent, ReporteDeudasComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class GastosModule { }
