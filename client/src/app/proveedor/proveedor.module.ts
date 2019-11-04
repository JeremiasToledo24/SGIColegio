import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterDialogComponent } from './componentes/register-dialog/register-dialog.component';
import { ProveedorComponent } from './componentes/proveedor/proveedor.component';
import { MaterialModule } from '../material/material.module';
import { EditDialogComponent } from './componentes/edit-dialog/edit-dialog.component';
import { ConfirmDialogComponent } from '../componentes/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [RegisterDialogComponent, ProveedorComponent, EditDialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  entryComponents: [RegisterDialogComponent, EditDialogComponent, ConfirmDialogComponent]
})
export class ProveedorModule { }
