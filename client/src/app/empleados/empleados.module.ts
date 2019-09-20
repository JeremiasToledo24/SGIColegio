import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoEmpleadoComponent } from './componentes/nuevo-empleado/nuevo-empleado.component';
import { MaterialModule } from '../material/material.module';
import { EmpleadoService } from '../servicios/empleados/empleado.service';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { EmpleadoHistoricoComponent } from './componentes/empleado-historico/empleado-historico.component';
import { PerfilEmpleadoComponent } from './componentes/perfil-empleado/perfil-empleado.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';

@NgModule({
  declarations: [NuevoEmpleadoComponent, ListaEmpleadosComponent, EditarEmpleadoComponent, EmpleadoHistoricoComponent, PerfilEmpleadoComponent, FormacionComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [EmpleadoService],
  entryComponents: [EditarEmpleadoComponent, FormacionComponent]
})
export class EmpleadosModule { }
