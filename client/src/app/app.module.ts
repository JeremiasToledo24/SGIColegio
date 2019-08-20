import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaMateriasComponent } from './componentes/materias/lista-materias/lista-materias.component';


// tslint:disable-next-line: quotemark
import {MaterialModule} from './material/material.module';


import { AgregarMateriaComponent } from './componentes/materias/agregar-materia/agregar-materia.component';

import { FormsModule} from '@angular/forms';

import { MateriaService } from './servicios/materias/materia.service';
import { CursoService } from './servicios/cursos/curso.service';
import { NivelService } from './servicios/niveles/nivel.service';
import { HttpClientModule } from '@angular/common/http';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { AgregarCursoComponent } from './componentes/cursos/agregar-curso/agregar-curso.component';
import { ListaCursoComponent } from './componentes/cursos/lista-curso/lista-curso.component';
import { MateriasComponent } from './componentes/materias/materias.component';
import { PlanEstudioComponent } from './componentes/plan-estudio/plan-estudio.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ListaPlanesComponent } from './componentes/plan-estudio/lista-planes/lista-planes.component';
import { EditarMateriaComponent } from './componentes/materias/editar-materia/editar-materia.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { ConfirmDialogComponent } from './componentes/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaMateriasComponent,
    AgregarMateriaComponent,
    CursosComponent,
    AgregarCursoComponent,
    ListaCursoComponent,
    MateriasComponent,
    PlanEstudioComponent,
    ListaPlanesComponent,
    EditarMateriaComponent,
    SidebarComponent,
    ConfirmDialogComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [MateriaService, CursoService, NivelService],
  bootstrap: [AppComponent],
  entryComponents: [AgregarMateriaComponent, EditarMateriaComponent,ConfirmDialogComponent]
})
export class AppModule {
  /**
   *
   */
  constructor( ) {


  }

}
