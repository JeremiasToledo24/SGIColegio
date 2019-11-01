import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDialogComponent } from './componentes/register-dialog/register-dialog.component';
import { ProveedorComponent } from './componentes/proveedor/proveedor.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [RegisterDialogComponent, ProveedorComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [RegisterDialogComponent]
})
export class ProveedorModule { }
