import {Component, OnInit} from '@angular/core';

import {NgForm} from "@angular/forms";
import {MatSnackBar} from "@angular/material";

import {MateriaService} from '../../servicios/materias/materia.service';

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
   public static resetForm (form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  // Agregar materia y reiniciar el formulario
  addMateria(form: NgForm) {
    this.materiaService.agregarMateria(form.value);
    AgregarMateriaComponent.resetForm(form);
  }

  // Mostrar SnackBar al agregar materia
  openSnackBar() {
    this._snackBar.open(
      'Materia agregada', '', {
        duration: 1500
      }
    )
  }

}
