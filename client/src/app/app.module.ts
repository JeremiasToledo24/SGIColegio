import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaMateriasComponent } from './componentes/lista-materias/lista-materias.component';

// tslint:disable-next-line: quotemark
import {MaterialModule} from './material/material.module';
import { MateriaService } from './servicios/materias/materia.service';
import { CursoService } from './servicios/cursos/curso.service';
import { NivelService } from './servicios/niveles/nivel.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaMateriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [MateriaService, CursoService, NivelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
