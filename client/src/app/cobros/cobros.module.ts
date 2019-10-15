import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CobrosComponent } from './componentes/cobros/cobros.component';
import { MaterialModule } from '../material/material.module';
import { DialogConfigComponent } from './componentes/dialog-config/dialog-config.component';

@NgModule({
  declarations: [CobrosComponent, DialogConfigComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [DialogConfigComponent]
})
export class CobrosModule { }
