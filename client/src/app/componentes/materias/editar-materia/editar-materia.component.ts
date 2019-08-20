import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {MateriaModel} from '../../../models/materia-model';
import {MateriaService} from '../../../servicios/materias/materia.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-editar-materia',
  templateUrl: './editar-materia.component.html',
  styleUrls: ['./editar-materia.component.css'],
  providers: [MateriaService]
})

export class EditarMateriaComponent implements OnInit {

  constructor(
    private materiaService: MateriaService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<EditarMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MateriaModel
  ) {
  }

  ngOnInit() {
  }

  // Editar materia
  editMateria(form: NgForm) {
      this.materiaService.actualizarMateria(this.data).then(response => {
        if (response) {
           // Todo ok
           this.snackBar.open('Materia actualizada con exito','OK', 
           {
             duration : 2000
           });
           this.dialogRef.close(true);
        }
      }).catch(error => {
        console.log(error.error.error.sqlMessage);
        this.snackBar.open(`Error al actualizar: ${error.error.error.sqlMessage}`, 'OK',
           {
             duration : 2000
           });
        this.dialogRef.close(false);
      });
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }
}
