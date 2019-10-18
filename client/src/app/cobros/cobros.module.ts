import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CobrosComponent } from './componentes/cobros/cobros.component';
import { MaterialModule } from '../material/material.module';
import { DialogConfigComponent } from './componentes/dialog-config/dialog-config.component';
import { ConfigFacturaComponent } from './componentes/config-factura/config-factura.component';
import { DialogCobrosComponent } from './componentes/dialog-cobros/dialog-cobros.component';
import { FacturaComponent } from './componentes/factura/factura.component';
import { FacturaPDFComponent } from './componentes/factura-pdf/factura-pdf.component';

@NgModule({
  declarations: [CobrosComponent, DialogConfigComponent, ConfigFacturaComponent, DialogCobrosComponent, FacturaComponent, FacturaPDFComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [DialogConfigComponent]
})
export class CobrosModule { }
