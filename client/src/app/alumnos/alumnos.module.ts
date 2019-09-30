import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscribirComponent } from './componentes/inscribir/inscribir.component';
import { ListaAlumnosComponent } from './componentes/lista-alumnos/lista-alumnos.component';
import { MaterialModule } from '../material/material.module';
import { AlumnoService } from '../servicios/alumnos/alumno.service';

@NgModule({
  declarations: [InscribirComponent, ListaAlumnosComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [AlumnoService]
})
export class AlumnosModule { }
