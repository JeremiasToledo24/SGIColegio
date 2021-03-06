import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrearAulaComponent} from './componentes/crear-aula/crear-aula.component';
import {MaterialModule} from '../material/material.module';
import {AulaService} from '../servicios/aula/aula.service';
import {AulasComponent} from './componentes/aulas/aulas.component';
import {EditarAulaComponent} from './componentes/editar-aula/editar-aula.component';
import { AsignarCursosComponent } from './componentes/asignar-cursos/asignar-cursos.component';

@NgModule({
  declarations: [CrearAulaComponent, AulasComponent, EditarAulaComponent, AsignarCursosComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [AulaService],
  entryComponents: [CrearAulaComponent, EditarAulaComponent]
})
export class AulasModule {
}
