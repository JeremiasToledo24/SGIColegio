import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { Materia } from 'src/app/docentes/componentes/docente-materia/asignar-materia/asignar-materia.component';
import { AgregarPlanComponent } from './agregar-plan/agregar-plan.component';

//CLASE PLAN X MATERIA
class PlanMat {
  idPlan: number;
  idMateria: number;

  constructor(idPlan, idMateria) {
    this.idPlan = idPlan;
    this.idMateria = idMateria;
  }
}

export interface Nivel {
  idNivel: number;
  nombre: string;
}

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.css']
})

export class PlanEstudioComponent implements OnInit {
  planForm = new FormGroup({
    idNivel: new FormControl('',Validators.required)
  });

  niveles: Nivel[] = [
    { idNivel: 1, nombre: 'Primaria' },
    { idNivel: 2, nombre: 'Secundaria' }
  ];
  displayedColumns: string[] = ['codigo', 'nombre', 'quitar'];
  dataSource = new MatTableDataSource<Materia>();
  dataSourceS = new MatTableDataSource<Materia>();
  listaMaterias: Materia[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private planService: PlanEstudioService, private cursoService: CursoService, private materiaService: MateriaService,
    public dialog: MatDialog
  ) {
  }


  ngOnInit() {
    /* inicia el dataSoruce, que muestra la lista de materias seleccionadas */
    this.materiaService.listarMaterias()
      .subscribe(
        res => {
          let materias;
          materias = res as Materia;
          this.dataSource = new MatTableDataSource<Materia>(materias)
          this.dataSource.paginator = this.paginator;

        }
      );
  }

  seleccionarNivel(nivel){
    console.log(nivel)
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* quitar la materia de la lista de materias seleccionadas */
  quitar(materia) {
    this.listaMaterias = this.listaMaterias.filter(obj => obj.codigo !== materia.codigo);
    console.log(this.listaMaterias)
    this.dataSourceS = new MatTableDataSource<Materia>(this.listaMaterias)
  }

  /* agregar materias a la lista de materias seleccionadas */
  agregar(materia) {
    const _mat = this.listaMaterias.filter(
      x => x.codigo === materia.codigo
    );
    if (_mat.length === 0) {
      this.listaMaterias.push(materia);
      this.dataSourceS = new MatTableDataSource<Materia>(this.listaMaterias)
    } else {
      this.planService.openSnackBar('la materia ya esta en la lista');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarPlanComponent, {
      data: {planForm: this.planForm, listaMaterias: this.listaMaterias}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  formValid(){
    if ((this.listaMaterias.length > 0)){
      this.openDialog()
    }else {
      this.planService.openSnackBar('Primero debe agregar Materias a la lista')
    }
    
  }

  /* crear plan de estudio */
  /* crearPlan(planForm: NgForm, dataSource: MateriaModel[]) {
    if (!(planForm.value.annio === undefined) && (dataSource.length > 0)) {
      let plan = new PlanEstudioModel(planForm.value.annio, planForm.value.idCurso, planForm.value.idNivel);
      this.planService.agregarPlan(plan).subscribe(
        (res: PlanEstudioModel) => {
          this.planService.openSnackBar('El plan fue crado en la base de datos');
          dataSource.forEach(element => {
            let planxmateria = new PlanMat(res.idPlanEstudio, element.idMateria);
            this.materiaService.agregarMatPlan(planxmateria).subscribe(
              x => {
                this.planService.openSnackBar('Materia Agregada al Plan');
              }
            );
          });
        }
      );
    } else {
      console.log('error');
    }

  } */

  



}

