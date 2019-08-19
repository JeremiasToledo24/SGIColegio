import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
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
    public dialogRef: MatDialogRef<EditarMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MateriaModel
  ) {
  }

  ngOnInit() {
  }

  // Editar materia
  editMateria(form: NgForm) {
    console.log('edit funca');
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }
}
