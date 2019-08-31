import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NuevoDocenteComponent} from './componentes/nuevo-docente/nuevo-docente.component';
import {MaterialModule} from '../material/material.module';
import {DocenteService} from '../servicios/docentes/docente.service';
import {HttpClientModule} from '@angular/common/http';
import { ListaDocenteComponent } from './componentes/lista-docente/lista-docente.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { EditarDocenteComponent } from './componentes/editar-docente/editar-docente.component';

@NgModule({
  declarations: [NuevoDocenteComponent, ListaDocenteComponent, FormacionComponent, EditarDocenteComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DocenteService],
  entryComponents: [FormacionComponent, EditarDocenteComponent]
})
export class DocentesModule {
}
