import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MateriaModel } from 'src/app/models/materia-model';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { PlanEstudioModel } from 'src/app/models/plan-estudio-model';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  tipoPlan: boolean = false;
  tipoMat: boolean = false;
  tipoDoc: boolean = false;
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private materiaService: MateriaService,
    private planService: PlanEstudioService,
    private docenteService: DocenteService) {
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
}
