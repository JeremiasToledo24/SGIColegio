import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NuevoDocenteComponent} from './componentes/nuevo-docente/nuevo-docente.component';
import {MaterialModule} from '../material/material.module';
import {DocenteService} from '../servicios/docentes/docente.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [NuevoDocenteComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DocenteService]
})
export class DocentesModule {
}
