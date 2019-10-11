import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearLectivosComponent } from './crear-lectivos/crear-lectivos.component';
import { ListaPeriodosLectivosComponent } from './lista-periodos-lectivos/lista-periodos-lectivos.component';
import { MaterialModule } from '../material/material.module';
import { PeriodosPrimariaComponent } from './periodos-primaria/periodos-primaria.component';
import { PeriodosSecundariaComponent } from './periodos-secundaria/periodos-secundaria.component';
import { EliminarDialogComponent } from './eliminar-dialog/eliminar-dialog.component';
import { VerPlanComponent } from './ver-plan/ver-plan.component';

@NgModule({
  declarations: [CrearLectivosComponent, ListaPeriodosLectivosComponent, PeriodosPrimariaComponent, PeriodosSecundariaComponent, EliminarDialogComponent, VerPlanComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LectivosModule { }
