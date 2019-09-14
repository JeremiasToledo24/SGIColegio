import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoEmpleadoComponent } from './componentes/nuevo-empleado/nuevo-empleado.component';
import { MaterialModule } from '../material/material.module';
import { EmpleadoService } from '../servicios/empleados/empleado.service';

@NgModule({
  declarations: [NuevoEmpleadoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [EmpleadoService]
})
export class EmpleadosModule { }
