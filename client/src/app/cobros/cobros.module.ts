import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CobrosComponent } from './componentes/cobros/cobros.component';
import { MaterialModule } from '../material/material.module';
import { DialogConfigComponent } from './componentes/dialog-config/dialog-config.component';
import { ConfigFacturaComponent } from './componentes/config-factura/config-factura.component';
import { DialogCobrosComponent } from './componentes/dialog-cobros/dialog-cobros.component';

@NgModule({
  declarations: [CobrosComponent, DialogConfigComponent, ConfigFacturaComponent, DialogCobrosComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [DialogConfigComponent]
})
export class CobrosModule { }
