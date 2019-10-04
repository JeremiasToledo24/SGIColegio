import { Component, OnInit } from '@angular/core';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { Planes } from 'src/app/componentes/plan-estudio/lista-planes/lista-planes.component';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PeriodoLectivo } from 'src/app/lectivos/crear-lectivos/crear-lectivos.component';
import { AsignarDocenteComponent } from './asignar-docente/asignar-docente.component';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';

@Component({
  selector: 'app-docentes-cursos',
  templateUrl: './docentes-cursos.component.html',
  styleUrls: ['./docentes-cursos.component.css']
})
export class DocentesCursosComponent implements OnInit {
  displayedColumns: string[] = ['idPeriodoLectivo', 'periodo', 'nombre', 'idPlanEstudio', 'operaciones'];
  displayedColumnsMateriasPeriodo: string[] = ['idPlanEstudio', 'anio', 'nombreMateria', 'operaciones']
  dataSource;
  dataSourceMateriasPeriodo;
  periodo;
  materiaPlan = [];


  constructor(
    private planService: PlanEstudioService,
    public dialog: MatDialog) { }

  ngOnInit() {


    this.planService.listarPeriodos().subscribe(res => {
      let data = res;
      this.dataSource = new MatTableDataSource(data)
    });
    this.periodo = ''
  }

  seleccionarPeriodo(periodo) {
    console.log('periodo :', periodo.idPlanEstudio);
    this.periodo = periodo
    this.planService.listarMateriasPlan(periodo.idPlanEstudio)
      .subscribe(
        res => {
          this.materiaPlan = res;
          this.dataSourceMateriasPeriodo = new MatTableDataSource(this.materiaPlan);
        }
      )
  }

  asignarDocente(materia) {
    const dialogRef = this.dialog.open(AsignarDocenteComponent, {
      data: { materia: materia, periodo: this.periodo }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
