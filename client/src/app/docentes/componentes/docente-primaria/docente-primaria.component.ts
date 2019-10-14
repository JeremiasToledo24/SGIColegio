import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { MatDialog } from '@angular/material';
import { ListaDocenteComponent } from '../lista-docente/lista-docente.component';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';

export interface Ciclos {
  periodo: string,
  idPlanEstudio: number,
  nombrePlan: string,
  idPeriodoLectivo: number,
  idNivel: number
}

@Component({
  selector: 'app-docente-primaria',
  templateUrl: './docente-primaria.component.html',
  styleUrls: ['./docente-primaria.component.css']
})


export class DocentePrimariaComponent implements OnInit {

  ciclos: Ciclos[];
  divisionControl = new FormControl('', Validators.required);
  cicloControl = new FormControl('', Validators.required);
  listaPrimero = [];
  listaSegundo = [];
  listaTercero = [];
  listaCuarto = [];
  listaQuinto = [];
  listaSexto = [];
  listaSeptimo = [];

  docentesPrimero = [];
  docentesSegundo = [];
  docentesTercero = [];
  docentesCuarto = [];
  docentesQuinto = [];
  docentesSexto = [];
  docentesSeptimo = [];
  constructor(private planService: PlanEstudioService,
    private docenteService: DocenteService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.planService.listarPeriodos(1)
      .subscribe(
        res => {
          this.ciclos = res as Ciclos[]
          console.log('this.ciclos :', this.ciclos);
        }
      )
  }

  traerPlan() {
    this.planService.getPlanId(this.cicloControl.value)
      .subscribe(
        res => {
          this.planService.listarMateriasPlan(this.cicloControl.value)
            .subscribe(
              res => {
                res.forEach(element => {
                  if (element.anio === 'PRIMERO') {
                    this.listaPrimero.push(element)
                  }
                  if (element.anio === 'SEGUNDO') {
                    this.listaSegundo.push(element)
                  }
                  if (element.anio === 'TERCERO') {
                    this.listaTercero.push(element)
                  }
                  if (element.anio === 'CUARTO') {
                    this.listaCuarto.push(element)
                  }
                  if (element.anio === 'QUINTO') {
                    this.listaQuinto.push(element)
                  }
                  if (element.anio === 'SEXTO') {
                    this.listaSexto.push(element)
                  }
                  if (element.anio === 'SEPTIMO') {
                    this.listaSeptimo.push(element)
                  }
                });
                console.log('res :', res);
              }
            )
        }
      )
  }

  validaDivision(materia, curso: string) {
    if (this.divisionControl.valid) {
      this.asignarDocente(materia, curso)
    } else {
      this.docenteService.openSnackBar('Por favor, seleccione una division', 'OK')
    }
  }

  asignarDocente(materia, curso: string): void {
    const dialogRef = this.dialog.open(ListaDocenteComponent, {
      width: '600px',
      data: { nivel: 1, materia: materia, curso: curso, seccion: this.divisionControl.value, periodo: this.cicloControl.value }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
