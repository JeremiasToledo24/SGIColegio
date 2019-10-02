import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearLectivosComponent } from './crear-lectivos/crear-lectivos.component';
import { ListaPeriodosLectivosComponent } from './lista-periodos-lectivos/lista-periodos-lectivos.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [CrearLectivosComponent, ListaPeriodosLectivosComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LectivosModule { }
