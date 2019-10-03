import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { Planes } from 'src/app/componentes/plan-estudio/lista-planes/lista-planes.component';
import { MatTableDataSource } from '@angular/material';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { Cursos } from 'src/app/aulas/componentes/asignar-cursos/asignar-cursos.component';

class Curso {
  idCurso: number;
  nombre: string;
  division: string;
  idNivel: number;
  AnioLectivo: string;
  idPlan: number
}

export class PeriodoLectivo {
  periodo;
  idPlanEstudio;
  idCurso;
  
  constructor(periodo, idPlanEstudio, idCurso) {
    this.periodo = periodo;
    this.idPlanEstudio = idPlanEstudio;
    this.idCurso = idCurso
  
  }
}

@Component({
  selector: 'app-crear-lectivos',
  templateUrl: './crear-lectivos.component.html',
  styleUrls: ['./crear-lectivos.component.css']
})
export class CrearLectivosComponent implements OnInit {

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
  plan: any[] = [];
  displayedColumns: string[] = ['idPlanEstudio', 'idNivel', 'nombrePlan', 'operaciones'];
  displayedColumnsCursos: string[] = ['idCurso', 'nombre', 'division', 'idNivel', 'operaciones'];
  displayedColumns1: string[] = ['idPlanEstudio', 'idNivel', 'nombrePlan'];
  displayedColumnsCursos1: string[] = ['idCurso', 'nombre', 'division', 'idNivel'];
  
  curso: any[] = [];


  dataSource;
  dataSourceSelected;
  dataSourceCursos;
  dataSourceCursosSelected;

  constructor(private planService: PlanEstudioService, private cursoService: CursoService) { }

  ngOnInit() {
    this.planService.listarPlanesAgrupados().subscribe(res => {
      let data = res as Planes[]
      this.dataSource = new MatTableDataSource<Planes>(data)
    });

    this.cursoService.listarCursos()
      .subscribe(
        res => {
          let data = res as Curso[];
          this.dataSourceCursos = new MatTableDataSource<Curso>(data);
        }

      )


  }

  agregar(plan) {
    this.plan = [];
    this.plan.push(plan)
    this.dataSourceSelected = new MatTableDataSource<Planes>(this.plan);

  }

  agregarCurso(curso) {
    this.curso = [];
    this.curso.push(curso)
    this.dataSourceCursosSelected = new MatTableDataSource<Curso>(this.curso);

  }

  formValid() {
    if (this.periodoControl.valid && this.plan.length > 0 && this.curso.length > 0) {
      let idCurso = this.curso.map((curso) => { return curso.idCurso })
      let idPlan = this.plan.map((plan) => { return plan.idPlanEstudio })
      const pl = new PeriodoLectivo(this.periodoControl.value, idPlan, idCurso)

      console.log(pl)
      this.planService.registrarPeriodoLectivo(pl)
        .subscribe(
          res => {
            this.planService.openSnackBar('Periodo Lectivo Registrado')
            this.periodoControl.reset()
            this.plan = [];
            this.curso = []
          }
        )
    }
  }

}
