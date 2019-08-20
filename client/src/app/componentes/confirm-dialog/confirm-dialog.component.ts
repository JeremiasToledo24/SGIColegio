import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MateriaModel} from 'src/app/models/materia-model';
import {MateriaService} from 'src/app/servicios/materias/materia.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MateriaModel,
              private materiaService: MateriaService) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminar(data) {
    this.materiaService.eliminarMateria(data.idMateria).then(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      });
  }
}
