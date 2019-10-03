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
import { CrearLectivosComponent } from './lectivos/crear-lectivos/crear-lectivos.component';
import { ListaPeriodosLectivosComponent } from './lectivos/lista-periodos-lectivos/lista-periodos-lectivos.component';
import { DocentesCursosComponent } from './docentes/componentes/docentes-cursos/docentes-cursos.component';


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
  { path: 'asignarCursos/:id', component: AsignarCursosComponent },
  { path: 'periodosLectivos', component: CrearLectivosComponent },
  { path: 'listaPeriodosLectivos', component: ListaPeriodosLectivosComponent },


  { path: '**', redirectTo: 'error' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
