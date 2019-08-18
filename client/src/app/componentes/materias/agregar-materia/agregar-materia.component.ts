import {Component, OnInit} from '@angular/core';
import {MateriaService} from '../../../servicios/materias/materia.service';

import {NgForm} from '@angular/forms';

import {MatSnackBar} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css'],
  providers: [MateriaService]
})
export class AgregarMateriaComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private materiaService: MateriaService,
    public dialogRef: MatDialogRef<AgregarMateriaComponent>
  ) {
  }

  ngOnInit() {
  }

  // Reiniciar el formulario
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  // Agregar materia y reiniciar el formulario
  addMateria(form: NgForm) {
    try {
      if (form.value.nombre.length === 0 || form.value.codigo.length === 0) {
        this.openSnackBar(
          'Llene todos los campos.',
          'OK'
        );
      } else {
        this.materiaService.agregarMateria(form.value)
          .then(
            res => {
              if (res === undefined) {
                this.openSnackBar(
                  'Materia existente',
                  'OK'
                );
              } else {
                this.openSnackBar(
                  'Materia agregada',
                  'OK'
                );
                this.resetForm(form);
                this.close();
                console.log(res);
              }
            }
          );
      }

    } catch (error) {
    }

  }

  // Mostrar SnackBar al agregar materia
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
        duration: 1500
      }
    );
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }

}
