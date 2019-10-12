import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CobrosComponent } from './componentes/cobros/cobros.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CobrosComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CobrosModule { }
