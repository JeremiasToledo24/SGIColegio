import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {DocenteService} from '../servicios/docentes/docente.service';
import {HttpClientModule} from '@angular/common/http';
import {DocenteMateriaComponent} from './componentes/docente-materia/docente-materia.component';
import {AsignarMateriaComponent} from './componentes/docente-materia/asignar-materia/asignar-materia.component';
import { DocentesCursosComponent } from './componentes/docentes-cursos/docentes-cursos.component';
import { AsignarDocenteComponent } from './componentes/docentes-cursos/asignar-docente/asignar-docente.component';
import { DocentePrimariaComponent } from './componentes/docente-primaria/docente-primaria.component';
import { DocenteSecundariaComponent } from './componentes/docente-secundaria/docente-secundaria.component';

@NgModule({
  declarations: [
    DocenteMateriaComponent,
    AsignarMateriaComponent,
    DocentesCursosComponent,
    AsignarDocenteComponent,
    DocentePrimariaComponent,
    DocenteSecundariaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule],
  providers: [DocenteService]
})
export class DocentesModule {
}
