import { Component, OnInit, ViewChild } from '@angular/core';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { FormControl, Validators } from '@angular/forms';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { MatDialog } from '@angular/material';
import { Materia } from 'src/app/docentes/componentes/docente-materia/asignar-materia/asignar-materia.component';
import { DialogMateriasComponent } from './dialog-materias/dialog-materias.component';
import { AddMateriaComponent } from './add-materia/add-materia.component';
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

export interface ListaAnios {
  nombreAnio: any, listaMaterias: Materia[]
}

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.css']
})

export class PlanEstudioComponent implements OnInit {
  /* nivel */
  nivel;
  /* lista de materias por anio */
  listaPrimero = []
  listaSegundo = []
  listaTercero = []
  listaCuarto = []
  listaQuinto = []
  listaSexto = []
  listaSeptimo = []

  /* lista de materias secundaria */
  primero = []
  segundo = []
  tercero = []
  cuarto = []
  quinto = []
  sexto = []
  septimo = []

  /* materia agregada */
  materia;

  /* tabla general de materias */
  listaMaterias = [];
  nivelControl = new FormControl('', Validators.required)

  listaAnios: ListaAnios[]
  listamat = [];

  /* nombrePlan */
  nombreControl = new FormControl('', Validators.required)

  /* listado de planes */
  listaPlanes = [{ nombrePlan: '', listaMat: [] }];
  materiasPlan;
  constructor(private planService: PlanEstudioService, private cursoService: CursoService, private materiaService: MateriaService,
    public dialog: MatDialog
  ) {
  }


  agregarMateria(anio: string) {
    const dialogRef = this.dialog.open(AddMateriaComponent, {
      data: { materia: this.materia }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.materia = result
      const mat = { nombre: result.nombre, codigo: result.codigo }
/*       let _mat;
 */      this.materiaService.agregarMateria(mat)
        .subscribe(
          res => {
            this.materiaService.listarMaterias()
              .subscribe(
                res => {
                  this.listaMaterias = res as [];
                }
              )
            /* _mat = { nombreControl: res.nombre, codigo: res.codigo }


            this.materia = _mat;
            console.log('this.materia :', this.materia); */
            /* if (anio.match('primero')) {
              this.listaPrimero.push(this.materia)
            }
            if (anio.match('segundo')) {
              this.listaSegundo.push(this.materia)
            }
            if (anio.match('tercero')) {
              this.listaTercero.push(this.materia)
            }
            if (anio.match('cuarto')) {
              this.listaCuarto.push(this.materia)
            }
            if (anio.match('quinto')) {
              this.listaQuinto.push(this.materia)
            }
            if (anio.match('sexto')) {
              this.listaSexto.push(this.materia)
            }
            if (anio.match('septimo')) {
              this.listaSeptimo.push(this.materia)
            } */
          }
        )
    });
  }

  eliminarMateria(materia, anio: string) {
    if (anio.match('primero')) {
      this.listaPrimero = this.listaPrimero.filter(obj => obj.idMateria !== materia.idMateria);
    }

    if (anio.match('segundo')) {
      this.listaSegundo = this.listaSegundo.filter(obj => obj.idMateria !== materia.idMateria);
    }
    if (anio.match('tercero')) {
      this.listaTercero = this.listaTercero.filter(obj => obj.idMateria !== materia.idMateria);
    }
    if (anio.match('cuarto')) {
      this.listaCuarto = this.listaCuarto.filter(obj => obj.idMateria !== materia.idMateria);
    }
    if (anio.match('quinto')) {
      this.listaQuinto = this.listaQuinto.filter(obj => obj.idMateria !== materia.idMateria);
    }
    if (anio.match('sexto')) {
      this.listaSexto = this.listaSexto.filter(obj => obj.idMateria !== materia.idMateria);
    }
    if (anio.match('septimo')) {
      this.listaSeptimo = this.listaSeptimo.filter(obj => obj.idMateria !== materia.idMateria);
    }

    /* secundaria */
    if (anio.match('primeroS')) {
      this.primero = this.primero.filter(obj => obj.idMateria !== materia.idMateria);
    }

    if (anio.match('segundoS')) {
      this.segundo = this.segundo.filter(obj => obj.idMateria !== materia.idMateria);
    }
    if (anio.match('terceroS')) {
      this.tercero = this.tercero.filter(obj => obj.idMateria !== materia.idMateria);
    }
    if (anio.match('cuartoS')) {
      this.cuarto = this.cuarto.filter(obj => obj.idMateria !== materia.idMateria);
    }
    if (anio.match('quintoS')) {
      this.quinto = this.quinto.filter(obj => obj.idMateria !== materia.idMateria);
    }

  }

  addMateria(materia, anio: string) {
    console.log(materia)
    if (anio.match('primero')) {
      let _listamateria = this.listaPrimero.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.listaPrimero.push(materia)
      }
    }
    if (anio.match('segundo')) {
      let _listamateria = this.listaSegundo.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.listaSegundo.push(materia)
      }
    }
    if (anio.match('tercero')) {
      let _listamateria = this.listaTercero.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.listaTercero.push(materia)
      }
    }
    if (anio.match('cuarto')) {
      let _listamateria = this.listaCuarto.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.listaCuarto.push(materia)
      }
    }
    if (anio.match('quinto')) {
      let _listamateria = this.listaQuinto.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.listaQuinto.push(materia)
      }
    }
    if (anio.match('sexto')) {
      let _listamateria = this.listaSexto.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.listaSexto.push(materia)
      }
    }
    if (anio.match('septimo')) {
      let _listamateria = this.listaSeptimo.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.listaSeptimo.push(materia)
      }
    }

    /* secundaria */
    if (anio.match('primeroS')) {
      let _listamateria = this.primero.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.primero.push(materia)
      }
    }
    if (anio.match('segundoS')) {
      let _listamateria = this.segundo.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.segundo.push(materia)
      }
    }
    if (anio.match('terceroS')) {
      let _listamateria = this.tercero.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.tercero.push(materia)
      }
    }
    if (anio.match('cuartoS')) {
      let _listamateria = this.cuarto.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.cuarto.push(materia)
      }
    }
    if (anio.match('quintoS')) {
      let _listamateria = this.quinto.filter(obj => obj.idMateria === materia.idMateria);
      if (_listamateria.length === 0) {
        this.quinto.push(materia)
      }
    }
  }

  getLevel(nivel: string) {
    this.planService.traerPlanPorNivel(nivel)
      .subscribe(
        res => {
          this.listaPlanes = res as [];
        }
      )
  }

  traerMaterias(plan) {
    this.planService.listarMateriasPlan(plan.idPlanEstudio)
      .subscribe(
        res => {
          console.log('res :', res);
          this.materiasPlan = res;
        }
      )


  }

  /* groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
      var key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});
  } */

  ngOnInit() {
    this.planService.traerPlanPorNivel(1)
      .subscribe(
        res => {
          this.listaPlanes = res as [];
        }
      )
    this.materiaService.listarMaterias()
      .subscribe(
        res => {
          this.listaMaterias = res as [];
          console.log(this.listaMaterias)
        }
      )
  }

  seleccionarNivel(nivel: string) {
    this.nivel = nivel;
  }

  formValid(nivel: string) {
    if (nivel.match('primaria')) {
      if (this.nombreControl.valid
        && this.nivelControl.valid
        && this.listaPrimero.length > 0
        && this.listaSegundo.length > 0
        && this.listaTercero.length > 0
        && this.listaCuarto.length > 0
        && this.listaQuinto.length > 0
        && this.listaSexto.length > 0
        && this.listaSeptimo.length > 0) {
        this.openDialog('primaria')
      } else {
        this.planService.openSnackBar('Complete los campos')
      }
    } else {
      if (this.nombreControl.valid
        && this.nivelControl.valid
        && this.primero.length > 0
        && this.segundo.length > 0
        && this.tercero.length > 0
        && this.cuarto.length > 0
        && this.quinto.length > 0) {
        this.openDialog('secundaria')
      } else {
        this.planService.openSnackBar('Complete los campos')
      }
    }


  }

  openDialog(nivel: string): void {
    const dialogRef = this.dialog.open(AgregarPlanComponent, {
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      let idPlan;
      if (result == 'S') {
        let plan = { idNivel: this.nivelControl.value, nombrePlan: this.nombreControl.value }
        if (nivel.match('primaria')) {
          this.planService.agregarPlan(plan)
            .subscribe(
              res => {
                idPlan = res.idPlanEstudio;
                this.planService.openSnackBar('plan creado');
                this.listaPrimero.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'PRIMERO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.listaSegundo.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'SEGUNDO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.listaTercero.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'TERCERO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.listaCuarto.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'CUARTO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.listaQuinto.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'QUINTO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.listaSexto.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'SEXTO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.listaSeptimo.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'SEPTIMO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.planService.traerPlanPorNivel(1)
                  .subscribe(
                    res => {
                      this.listaPlanes = res as [];
                    }
                  )
              })

        }
        if (nivel.match('secundaria')) {
          this.planService.agregarPlan(plan)
            .subscribe(
              res => {
                idPlan = res.idPlanEstudio;
                this.planService.openSnackBar('plan creado');
                this.primero.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'PRIMERO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.segundo.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'SEGUNDO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.tercero.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'TERCERO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.cuarto.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'CUARTO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.quinto.forEach(element => {
                  const planMateria = { codMateria: element.idMateria, anio: 'QUINTO', idPlan: idPlan }
                  this.planService.nuevoPlanMateria(planMateria)
                    .subscribe(
                      res => {
                        console.log('res :', res);
                      }
                    )
                });
                this.planService.traerPlanPorNivel(1)
                  .subscribe(
                    res => {
                      this.listaPlanes = res as [];
                    }
                  )
              })
        }

      }
    });
  }





  /* openDialogMaterias(): void {
    const dialogRef = this.dialog.open(DialogMateriasComponent, {
      data: ''
    });
    dialogRef.afterClosed().subscribe(
      (result: ListaAnios) => {
        this.listaAnios.push(result);
        console.log(this.listaAnios)
      }
    );
  } */




}

