import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NuevoDocenteComponent} from './componentes/nuevo-docente/nuevo-docente.component';
import {MaterialModule} from '../material/material.module';
import {DocenteService} from '../servicios/docentes/docente.service';
import {HttpClientModule} from '@angular/common/http';
import { ListaDocenteComponent } from './componentes/lista-docente/lista-docente.component';
import { FormacionComponent } from './componentes/formacion/formacion.component';
import { PerfilDocenteComponent } from './componentes/perfil-docente/perfil-docente.component';
import { EditarDocenteComponent } from './componentes/editar-docente/editar-docente.component';
import { DocenteMateriaComponent } from './componentes/docente-materia/docente-materia.component';
import { AsignarMateriaComponent } from './componentes/docente-materia/asignar-materia/asignar-materia.component';
@NgModule({
  declarations: [NuevoDocenteComponent,
    ListaDocenteComponent,
    FormacionComponent,
    PerfilDocenteComponent,
    EditarDocenteComponent,
    DocenteMateriaComponent,
    AsignarMateriaComponent,
    ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule ],
  providers: [DocenteService],
  entryComponents: [FormacionComponent, EditarDocenteComponent]
})
export class DocentesModule {
}
