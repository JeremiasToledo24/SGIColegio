import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes del SGI
import {MateriasComponent} from './componentes/materias/materias.component';
import {CursosComponent} from './componentes/cursos/cursos.component';
import {ListaPlanesComponent} from './componentes/plan-estudio/lista-planes/lista-planes.component';
import {PlanEstudioComponent} from './componentes/plan-estudio/plan-estudio.component';
import {HomeComponent} from './componentes/navegacion/home/home.component';
import {NotFoundComponent} from './componentes/navegacion/not-found/not-found.component';
import {NuevoDocenteComponent} from './docentes/componentes/nuevo-docente/nuevo-docente.component';
import {ListaDocenteComponent} from './docentes/componentes/lista-docente/lista-docente.component';
import {PerfilDocenteComponent} from './docentes/componentes/perfil-docente/perfil-docente.component';
import {AulasComponent} from './aulas/componentes/aulas/aulas.component';
import {DocenteMateriaComponent} from './docentes/componentes/docente-materia/docente-materia.component';
import {AsignarMateriaComponent} from './docentes/componentes/docente-materia/asignar-materia/asignar-materia.component';
import { NuevoEmpleadoComponent } from './empleados/componentes/nuevo-empleado/nuevo-empleado.component';
import { ListaEmpleadosComponent } from './empleados/componentes/lista-empleados/lista-empleados.component';
import { AsignarCursosComponent } from './aulas/componentes/asignar-cursos/asignar-cursos.component';
import { EmpleadoHistoricoComponent } from './empleados/componentes/empleado-historico/empleado-historico.component';
import { DocenteHistoricoComponent } from './docentes/componentes/docente-historico/docente-historico.component';
import { LoginComponent } from './login/login/login.component';
import {UserGuard} from "./guard/user.guard";


const routes: Routes = [
  { path: '', component: HomeComponent , canActivate: [UserGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'Materias', component: MateriasComponent , canActivate: [UserGuard]},
  { path: 'Cursos', component: CursosComponent , canActivate: [UserGuard]},
  { path: 'listaPlanes', component: ListaPlanesComponent , canActivate: [UserGuard]},
  { path: 'crearPlan', component: PlanEstudioComponent , canActivate: [UserGuard]},
  { path: 'error', component: NotFoundComponent , canActivate: [UserGuard]},
  { path: 'nuevoDocente', component: NuevoDocenteComponent , canActivate: [UserGuard]},
  { path: 'listaDocentes', component: ListaDocenteComponent , canActivate: [UserGuard]},
  { path: 'listaDocentesHistoricos', component: DocenteHistoricoComponent, canActivate: [UserGuard]},
  { path: 'perfilDocente/:id', component: PerfilDocenteComponent , canActivate: [UserGuard]},
  { path: 'docenteMateria', component: DocenteMateriaComponent , canActivate: [UserGuard]},
  { path: 'asignarMateria/:id', component: AsignarMateriaComponent , canActivate: [UserGuard]},
  { path: 'Aulas', component: AulasComponent , canActivate: [UserGuard]},
  { path: 'nuevoEmpleado', component: NuevoEmpleadoComponent , canActivate: [UserGuard]},
  { path: 'listaEmpleados', component: ListaEmpleadosComponent , canActivate: [UserGuard]},
  { path: 'listaEmpleadosHistoricos', component: EmpleadoHistoricoComponent, canActivate: [UserGuard]},
  { path: 'asignarCursos/:id', component: AsignarCursosComponent, canActivate: [UserGuard]},
  { path: '**', redirectTo: 'error' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
