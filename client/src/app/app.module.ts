import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';


import { AgregarMateriaComponent } from './componentes/materias/agregar-materia/agregar-materia.component';
import { ListaMateriasComponent } from './componentes/materias/lista-materias/lista-materias.component';


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
import { ConfirmDialogComponent } from './componentes/confirm-dialog/confirm-dialog.component';
import { SideBarComponent } from './componentes/navegacion/side-bar/side-bar.component';
import { NavbarComponent } from './componentes/navegacion/navbar/navbar.component';
import { FooterComponent } from './componentes/navegacion/footer/footer.component';
import { HomeComponent } from './componentes/navegacion/home/home.component';
import { NotFoundComponent } from './componentes/navegacion/not-found/not-found.component';
import { DocentesModule } from './docentes/docentes.module';
import { AulasModule } from './aulas/aulas.module';
import { EditarCursoComponent } from './componentes/cursos/editar-curso/editar-curso.component';
import { EmpleadosModule } from './empleados/empleados.module';
import { LoginComponent } from './login/login/login.component';
import { AgregarPlanComponent } from './componentes/plan-estudio/agregar-plan/agregar-plan.component';

import { AlumnosModule } from './alumnos/alumnos.module';

import { DialogMateriasComponent } from './componentes/plan-estudio/dialog-materias/dialog-materias.component';
import { LectivosModule } from './lectivos/lectivos.module';
import { AsignarDocenteComponent } from './docentes/componentes/docentes-cursos/asignar-docente/asignar-docente.component';
import { AddMateriaComponent } from './componentes/plan-estudio/add-materia/add-materia.component';
import { CrearLectivosComponent } from './lectivos/crear-lectivos/crear-lectivos.component';
import { EliminarDialogComponent } from './lectivos/eliminar-dialog/eliminar-dialog.component';
import { VerPlanComponent } from './lectivos/ver-plan/ver-plan.component';
import { ListaDocenteComponent } from './docentes/componentes/lista-docente/lista-docente.component';
import { CobrosModule } from './cobros/cobros.module';
import { DialogInscribirComponent } from './alumnos/componentes/dialog-inscribir/dialog-inscribir.component';
import { DialogoEliminarComponent } from './alumnos/componentes/dialogo-eliminar/dialogo-eliminar.component';
import { DialogCobrosComponent } from './cobros/componentes/dialog-cobros/dialog-cobros.component';
import { DialogConfigComponent } from './cobros/componentes/dialog-config/dialog-config.component';
import { FacturaComponent } from './cobros/componentes/factura/factura.component';
import { FacturaPDFComponent } from './cobros/componentes/factura-pdf/factura-pdf.component';
import { GastosModule } from './gastos/gastos.module';
import { NuevaFacturaComponent } from './gastos/componentes/nueva-factura/nueva-factura.component';

import { ProveedorModule } from './proveedor/proveedor.module';

@NgModule({
  declarations: [
    AgregarCursoComponent,
    AgregarMateriaComponent,
    AppComponent,
    ConfirmDialogComponent,
    CursosComponent,
    EditarCursoComponent,
    EditarMateriaComponent,
    FooterComponent,
    HomeComponent,
    ListaCursoComponent,
    ListaMateriasComponent,
    ListaPlanesComponent,
    MateriasComponent,
    NavbarComponent,
    NotFoundComponent,
    PlanEstudioComponent,
    SideBarComponent,
    LoginComponent,
    AgregarPlanComponent,
    DialogMateriasComponent,
    AddMateriaComponent
  ],
  imports: [
    AppRoutingModule,
    AulasModule,
    BrowserAnimationsModule,
    BrowserModule,
    DocentesModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModule,
    EmpleadosModule,
    AlumnosModule,
    LectivosModule,
    CobrosModule,
    GastosModule
    ProveedorModule
  ],
  providers: [MateriaService, CursoService, NivelService],
  bootstrap: [AppComponent],
  entryComponents: [
    AgregarMateriaComponent,
    EditarMateriaComponent,
    ConfirmDialogComponent,
    EditarCursoComponent,
    AgregarPlanComponent,
    DialogMateriasComponent,
    AsignarDocenteComponent,
    AddMateriaComponent,
    CrearLectivosComponent,
    EliminarDialogComponent,
    VerPlanComponent,
    ListaDocenteComponent,
    DialogInscribirComponent,
    DialogoEliminarComponent,
    DialogCobrosComponent,
    DialogConfigComponent,
    FacturaComponent,
    FacturaPDFComponent, NuevaFacturaComponent],
  exports: [ListaMateriasComponent],

})
export class AppModule {
  /**
   *
   */
  constructor() {


  }

}
