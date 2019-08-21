import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MateriaModel} from 'src/app/models/materia-model';
import {MateriaService} from 'src/app/servicios/materias/materia.service';
import { PlanEstudioModel } from 'src/app/models/plan-estudio-model';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  tipoPlan: boolean = false;
  tipoMat: boolean = false;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dataMateria: MateriaModel,
              @Inject(MAT_DIALOG_DATA) public dataPlan: PlanEstudioModel,
              private materiaService: MateriaService,
              private planService: PlanEstudioService) {
  }

  ngOnInit() {
    if (this.dataPlan){
      this.tipoPlan = true
    }
    if (this.dataMateria) {
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
    this.planService.eliminarPlan(dataPlan.idPlan).subscribe(
      res => {
        if (res) {
          this.dialogRef.close(true);
        }
      });
  }
}
