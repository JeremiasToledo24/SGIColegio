import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';
import { AulaService } from 'src/app/servicios/aula/aula.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  tipoPlan: boolean = false;
  tipoMat: boolean = false;
  tipoDoc: boolean = false;
  tipoAula: boolean = false;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private materiaService: MateriaService,
    private planService: PlanEstudioService,
    private docenteService: DocenteService,
    private aulaService: AulaService
    ) {
  }

  ngOnInit() {
    // Verifica qué tipo de datos recibe

    if (this.data.dni !== undefined) {
      console.log(this.data, 'data docente')
      this.tipoDoc = true
    }
    if (this.data.id !== undefined) {
      console.log(this.data, 'data plan')
      this.tipoPlan = true
    }
    if (this.data.idMateria !== undefined) {
      console.log(this.data, 'data materia')
      this.tipoMat = true
    }
    if (this.data.idAula !== undefined) {
      console.log(this.data, 'data aula');
      this.tipoAula = true
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarMateria(dataMateria) {
    this.materiaService.eliminarMateria(dataMateria.idMateria).then(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      });
  }

  eliminarPlan(dataPlan) {
    console.log(dataPlan.id)
    this.planService.eliminarPlan(dataPlan.id).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      });
  }

  eliminarDocente(dataDocente) {
    console.log(dataDocente.dni)
    this.docenteService.eliminarDocente(dataDocente.dni).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      }
    )
  }

  eliminarAula(dataAula) {
    console.log(dataAula.idAula)
    this.aulaService.deleteAula(dataAula.idAula).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      }
    )
  }
}
