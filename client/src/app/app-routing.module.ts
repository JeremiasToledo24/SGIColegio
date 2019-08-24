import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Componentes del SGI
import {MateriasComponent} from './componentes/materias/materias.component';
import {CursosComponent} from './componentes/cursos/cursos.component';
import {ListaPlanesComponent} from './componentes/plan-estudio/lista-planes/lista-planes.component';
import {PlanEstudioComponent} from './componentes/plan-estudio/plan-estudio.component';
import {HomeComponent} from './componentes/navegacion/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Materias', component: MateriasComponent},
  {path: 'Cursos', component: CursosComponent},
  {path: 'listaPlanes', component: ListaPlanesComponent},
  {path: 'crearPlan', component: PlanEstudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
