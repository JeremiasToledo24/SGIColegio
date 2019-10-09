import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearLectivosComponent } from './crear-lectivos/crear-lectivos.component';
import { ListaPeriodosLectivosComponent } from './lista-periodos-lectivos/lista-periodos-lectivos.component';
import { MaterialModule } from '../material/material.module';
import { PeriodosPrimariaComponent } from './periodos-primaria/periodos-primaria.component';
import { PeriodosSecundariaComponent } from './periodos-secundaria/periodos-secundaria.component';

@NgModule({
  declarations: [CrearLectivosComponent, ListaPeriodosLectivosComponent, PeriodosPrimariaComponent, PeriodosSecundariaComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LectivosModule { }
