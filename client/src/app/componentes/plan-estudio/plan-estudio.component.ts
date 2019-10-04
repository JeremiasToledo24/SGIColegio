import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { Materia } from 'src/app/docentes/componentes/docente-materia/asignar-materia/asignar-materia.component';
import { AgregarPlanComponent } from './agregar-plan/agregar-plan.component';
import { DialogMateriasComponent } from './dialog-materias/dialog-materias.component';

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

export interface ListaAnios {
  nombreAnio: any, listaMaterias: Materia[]
}

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.css']
})

export class PlanEstudioComponent implements OnInit {

  nivelControl = new FormControl('', Validators.required)
  nombreControl = new FormControl('', Validators.required)

  listaAnios: ListaAnios[]
  listamat = [];

  constructor(private planService: PlanEstudioService, private cursoService: CursoService, private materiaService: MateriaService,
    public dialog: MatDialog
  ) {
  }


  ngOnInit() {
    this.listaAnios = [{nombreAnio: 'hola',listaMaterias:[{codigo:'123',nombre:'lengua',idMateria:8}]}]
  }


  openDialogMaterias(): void {
    const dialogRef = this.dialog.open(DialogMateriasComponent, {
      data: ''
    });
    dialogRef.afterClosed().subscribe(
      (result: ListaAnios) => {
        this.listaAnios.push(result);
        console.log(this.listaAnios)
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarPlanComponent, {
      data: { idNivel: this.nivelControl, nombrePlan: this.nombreControl, listaAnios: this.listaAnios }
    });

    dialogRef.afterClosed().subscribe(result => {
      let idPlan;
      if (result == 'S') {
        let plan = { idNivel: this.nivelControl.value, nombrePlan: this.nombreControl.value }
        this.planService.agregarPlan(plan)
          .subscribe(
            res => {
              idPlan = res.idPlanEstudio;
              this.planService.openSnackBar('plan creado');
              this.listaAnios.forEach(anio => {
                anio.listaMaterias.forEach(_listamateria => {
                  const planMateria = { idPlan: idPlan, anio: anio.nombreAnio, codMateria: _listamateria.idMateria }
                  console.log(planMateria)
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log(res)
                        this.listaAnios = [];
                        this.nombreControl.reset();
                        this.nivelControl.reset();
                      }
                    )
                });
              });
            })
      }
    });
  }

  formValid() {
    if (this.nombreControl.valid && this.nivelControl.valid) {
      this.openDialog()
    } else {
      this.planService.openSnackBar('Complete los campos')
    }

  }
}

