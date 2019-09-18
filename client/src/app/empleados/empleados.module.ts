import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoEmpleadoComponent } from './componentes/nuevo-empleado/nuevo-empleado.component';
import { MaterialModule } from '../material/material.module';
import { EmpleadoService } from '../servicios/empleados/empleado.service';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { EmpleadoHistoricoComponent } from './componentes/empleado-historico/empleado-historico.component';

@NgModule({
  declarations: [NuevoEmpleadoComponent, ListaEmpleadosComponent, EditarEmpleadoComponent, EmpleadoHistoricoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [EmpleadoService],
  entryComponents: [EditarEmpleadoComponent]
})
export class EmpleadosModule { }
