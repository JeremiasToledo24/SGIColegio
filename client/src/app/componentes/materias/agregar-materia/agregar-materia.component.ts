import { Component, OnInit } from '@angular/core';

import { NgForm } from "@angular/forms";
import { MatSnackBar } from "@angular/material";

import { MateriaService } from '../../../servicios/materias/materia.service';
import { MateriaModel } from 'src/app/models/materia-model';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.component.html',
  styleUrls: ['./agregar-materia.component.css'],
  providers: [MateriaService]
})
export class AgregarMateriaComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar,
    private materiaService: MateriaService
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
      this.materiaService.agregarMateria(form.value)
        .then(
          res => {
            if (res === undefined) {
              this.openSnackBar('Materia existente');

            } else {
              this.openSnackBar('materia agregada');
              this.resetForm(form);
              console.log(res);
            }
          }
        )
    } catch (error) {
    }

  }

  // Mostrar SnackBar al agregar materia
  openSnackBar(m: string) {
    this._snackBar.open(
      m, '', {
        duration: 1500
      }
    )
  }

}
