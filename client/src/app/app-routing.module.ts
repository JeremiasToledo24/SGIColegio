import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes del SGI
import { MateriasComponent } from './componentes/materias/materias.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ListaPlanesComponent } from './componentes/plan-estudio/lista-planes/lista-planes.component';
import { PlanEstudioComponent } from './componentes/plan-estudio/plan-estudio.component';
import { HomeComponent } from './componentes/navegacion/home/home.component';
import { NotFoundComponent } from './componentes/navegacion/not-found/not-found.component';
import { AulasComponent } from './aulas/componentes/aulas/aulas.component';
import { DocenteMateriaComponent } from './docentes/componentes/docente-materia/docente-materia.component';
import { AsignarMateriaComponent } from './docentes/componentes/docente-materia/asignar-materia/asignar-materia.component';
import { NuevoEmpleadoComponent } from './empleados/componentes/nuevo-empleado/nuevo-empleado.component';
import { ListaEmpleadosComponent } from './empleados/componentes/lista-empleados/lista-empleados.component';
import { AsignarCursosComponent } from './aulas/componentes/asignar-cursos/asignar-cursos.component';
import { EmpleadoHistoricoComponent } from './empleados/componentes/empleado-historico/empleado-historico.component';
import { LoginComponent } from './login/login/login.component';
import { PerfilEmpleadoComponent } from './empleados/componentes/perfil-empleado/perfil-empleado.component';

import { InscribirComponent } from './alumnos/componentes/inscribir/inscribir.component';
import { ListaAlumnosComponent } from './alumnos/componentes/lista-alumnos/lista-alumnos.component';
import { PerfilAlumnoComponent } from './alumnos/componentes/perfil-alumno/perfil-alumno.component';
import { AlumnoCursoComponent } from './alumnos/componentes/alumno-curso/alumno-curso.component';
import { CrearLectivosComponent } from './lectivos/crear-lectivos/crear-lectivos.component';
import { ListaPeriodosLectivosComponent } from './lectivos/lista-periodos-lectivos/lista-periodos-lectivos.component';
import { DocentesCursosComponent } from './docentes/componentes/docentes-cursos/docentes-cursos.component';
import { DocentePrimariaComponent } from './docentes/componentes/docente-primaria/docente-primaria.component';
import { DocenteSecundariaComponent } from './docentes/componentes/docente-secundaria/docente-secundaria.component';
import { PeriodosPrimariaComponent } from './lectivos/periodos-primaria/periodos-primaria.component';
import { PeriodosSecundariaComponent } from './lectivos/periodos-secundaria/periodos-secundaria.component';
import { CobrosComponent } from './cobros/componentes/cobros/cobros.component';
import { AlumnoCursoSecundariaComponent } from './alumnos/componentes/alumno-curso-secundaria/alumno-curso-secundaria.component';
import { ConfigFacturaComponent } from './cobros/componentes/config-factura/config-factura.component';
import { ProveedorComponent } from './proveedor/componentes/proveedor/proveedor.component';
import { IngresosComponent } from './cobros/componentes/ingresos/ingresos.component';
import { PanelFacturasComponent } from './gastos/componentes/panel-facturas/panel-facturas.component';
import { NuevaFacturaComponent } from './gastos/componentes/nueva-factura/nueva-factura.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Materias', component: MateriasComponent },
  { path: 'Cursos', component: CursosComponent },
  { path: 'listaPlanes', component: ListaPlanesComponent },
  { path: 'crearPlan', component: PlanEstudioComponent },
  { path: 'error', component: NotFoundComponent },
  { path: 'perfilEmpleado/:id', component: PerfilEmpleadoComponent },
  { path: 'docenteMateria', component: DocentesCursosComponent },
  { path: 'asignarMateria/:id', component: AsignarMateriaComponent },
  { path: 'Aulas', component: AulasComponent },
  { path: 'nuevoEmpleado', component: NuevoEmpleadoComponent },
  { path: 'listaEmpleados', component: ListaEmpleadosComponent },
  { path: 'listaEmpleadosHistoricos', component: EmpleadoHistoricoComponent },
  { path: 'inscribirAlumno', component: InscribirComponent },
  { path: 'listaAlumnos', component: ListaAlumnosComponent },
  { path: 'perfilAlumno/:id', component: PerfilAlumnoComponent },
  { path: 'asignarAlumnoPrimaria', component: AlumnoCursoComponent },
  { path: 'asignarAlumnoSecundaria', component: AlumnoCursoSecundariaComponent },
  { path: 'asignarCursos/:id', component: AsignarCursosComponent },
  { path: 'periodosLectivos', component: CrearLectivosComponent },
  { path: 'listaPeriodosLectivos', component: ListaPeriodosLectivosComponent },
  { path: 'docentesPrimaria', component: DocentePrimariaComponent },
  { path: 'docentesSecundaria', component: DocenteSecundariaComponent },
  { path: 'periodosPrimaria', component: PeriodosPrimariaComponent },
  { path: 'periodosSecundaria', component: PeriodosSecundariaComponent },
  { path: 'cobros', component: CobrosComponent },
  { path: 'configFactura', component: ConfigFacturaComponent},
  { path: 'proveedores', component: ProveedorComponent},
  { path: 'ingresos', component: IngresosComponent},
  {path: 'gastos', component: PanelFacturasComponent},
  {path: 'registrarFactura', component: NuevaFacturaComponent},
  { path: '**', redirectTo: 'error' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
