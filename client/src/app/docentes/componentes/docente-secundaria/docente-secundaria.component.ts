import { Component, OnInit } from '@angular/core';
import { Ciclos } from '../docente-primaria/docente-primaria.component';
import { FormControl, Validators } from '@angular/forms';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';
import { MatDialog } from '@angular/material';
import { ListaDocenteComponent } from '../lista-docente/lista-docente.component';

@Component({
  selector: 'app-docente-secundaria',
  templateUrl: './docente-secundaria.component.html',
  styleUrls: ['./docente-secundaria.component.css']
})
export class DocenteSecundariaComponent implements OnInit {

  ciclos: Ciclos[];
  divisionControl = new FormControl('', Validators.required);
  idPlanControl = new FormControl('', Validators.required);
  nivelControl = new FormControl('', Validators.required);
  cursoControl = new FormControl('', Validators.required);
  cicloControl = new FormControl('', Validators.required);

  dataSource = []
  displayedColumns: string[] = ['nombreMateria', 'DNIDocente', 'nombreDocente', 'apellidoDocente', 'operaciones'];
  constructor(private planService: PlanEstudioService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.planService.listarPeriodos(2)
      .subscribe(
        res => {
          this.ciclos = res as Ciclos[]
        }
      )
  }

  traerMateriaPorCurso(div) {
    this.planService.listarMateriasPlanPorCurso(this.idPlanControl.value.idPlanEstudio, this.cursoControl.value)
      .subscribe(
        res => {
          this.dataSource = res
          this.dataSource = this.dataSource.filter(function (fila) {
            return fila.division !== div
          })
        }
      )
  }

  asignarDocente(element, operacion): void {
    const dialogRef = this.dialog.open(ListaDocenteComponent, {
      width: '700px',
      data: {
        nivel: 2,
        materia: element.nombreMateria,
        curso: element.anio,
        seccion: this.divisionControl.value,
        periodo: this.idPlanControl.value,
        nombreDocente: element.nombreDocente,
        apellidoDocente: element.apellidoDocente,
        DNIDocente: element.DNIDocente,
        operacion: operacion,
        idPeriodo: this.idPlanControl.value.idPeriodoLectivo,
        idPlanMateria: element.idPlanMateria,
        idAsignacionDocente: element.idAsignacionDocente
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'A') {
        this.traerMateriaPorCurso('B')
      } else {
        this.traerMateriaPorCurso('A')
      }
    });
  }
}