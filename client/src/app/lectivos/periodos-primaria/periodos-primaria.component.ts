import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { MatDialog } from '@angular/material';
import { CrearLectivosComponent } from '../crear-lectivos/crear-lectivos.component';
import { EliminarDialogComponent } from '../eliminar-dialog/eliminar-dialog.component';
import { VerPlanComponent } from '../ver-plan/ver-plan.component';

@Component({
  selector: 'app-periodos-primaria',
  templateUrl: './periodos-primaria.component.html',
  styleUrls: ['./periodos-primaria.component.css']
})
export class PeriodosPrimariaComponent implements OnInit {

  periodoControl = new FormControl('', [Validators.required]);
  periodos = [
    { anio: 2020 },
    { anio: 2021 },
    { anio: 2022 },
    { anio: 2023 },
    { anio: 2024 },
    { anio: 2025 },
    { anio: 2026 },
    { anio: 2027 },
    { anio: 2028 },
    { anio: 2029 },
    { anio: 2030 },
  ];
  listaPlanes: [];
  listaPeriodos = []
  constructor(private planService: PlanEstudioService, public dialog: MatDialog) { }
  ngOnInit() {
    this.planService.traerPlanPorNivel(1)
      .subscribe(
        res => {
          this.listaPlanes = res as [];
          console.log('this.listaPlanes :', this.listaPlanes);
        }
      )

    this.planService.getPeriodosNivel(1)
      .subscribe(
        res => {
          this.listaPeriodos = res as [];
          console.log('this.listaPeriodos :', this.listaPeriodos);
        }
      )
  }

  formValid(plan) {
    if (this.periodoControl.valid) {
      this.openDialog(plan)
    } else {
      this.planService.openSnackBar('Por favor, seleccione el año')
    }
  }


  verPlan(item){
    console.log('item :', item);
    this.planService.getPlanId(item.idPlanEstudio)
    .subscribe(
      res => {
        const dialogRef = this.dialog.open(VerPlanComponent,
          
          {data: {plan: item}})
      }
    )
  }

  openDialog(plan): void {
    const dialogRef = this.dialog.open(CrearLectivosComponent, {
      data: { plan: plan, anio: this.periodoControl.value }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result.match('S')) {
        const _plan = { periodo: this.periodoControl.value, idPlanEstudio: plan.idPlanEstudio, idNivel: 1 }
        this.planService.registrarPeriodoLectivo(_plan)
          .subscribe(
            res => {
              this.planService.openSnackBar('Periodo lectivo Creado')
              this.planService.getPeriodosNivel(1)
                .subscribe(
                  res => {
                    this.listaPeriodos = res as [];
                    console.log('this.listaPeriodos :', this.listaPeriodos);
                  }
                )

            }
          )
      } else {
        console.log('no :', 'no');
      }
    });
  }

  openDialogEliminar(ciclo){
    const dialogRef = this.dialog.open(EliminarDialogComponent,{
      data: {ciclo: ciclo}
    })
    dialogRef.afterClosed().subscribe(result =>{
      if (result === 'S') {
        this.eliminar(ciclo)
      }
    })
  }

  eliminar(ciclo) {
    console.log('ciclo :', ciclo);
    this.planService.eliminarPeriodo(ciclo.idPeriodoLectivo)
      .subscribe(
        res => {
          this.planService.openSnackBar("Ciclo Eliminado")
          this.planService.getPeriodosNivel(1)
            .subscribe(
              res => {
                this.listaPeriodos = res as [];
                console.log('this.listaPeriodos :', this.listaPeriodos);
              }
            )
        }
      )
  }
}
