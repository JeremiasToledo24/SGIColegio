import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscribirComponent } from './componentes/inscribir/inscribir.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { MaterialModule } from '../material/material.module';
import { AlumnoService } from '../servicios/alumnos/alumno.service';
import { PerfilAlumnoComponent } from './componentes/perfil-alumno/perfil-alumno.component';
import { AlumnoCursoComponent } from './componentes/alumno-curso/alumno-curso.component';

@NgModule({
  declarations: [InscribirComponent, ListaAlumnosComponent, PerfilAlumnoComponent, AlumnoCursoComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [AlumnoService]
})
export class AlumnosModule { }
