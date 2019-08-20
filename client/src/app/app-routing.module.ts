import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriasComponent } from './componentes/materias/materias.component';
import { PlanEstudioComponent } from './componentes/plan-estudio/plan-estudio.component';

const routes: Routes = [
  {path: 'materias', component: MateriasComponent},
  {path : 'nuevoPlan', component: PlanEstudioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
