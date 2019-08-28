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
import { ListaDocenteComponent } from './docentes/componentes/lista-docente/lista-docente.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Materias', component: MateriasComponent},
  {path: 'Cursos', component: CursosComponent},
  {path: 'listaPlanes', component: ListaPlanesComponent},
  {path: 'crearPlan', component: PlanEstudioComponent},
  {path: 'error', component: NotFoundComponent},
  {path: 'nuevoDocente', component: NuevoDocenteComponent},
  {path: 'listaDocentes', component: ListaDocenteComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
