import {Component, OnInit, Inject} from '@angular/core';
import {DocenteService} from 'src/app/servicios/docentes/docente.service';
import {MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css'],
  providers: [DocenteService]
})
export class EditarDocenteComponent implements OnInit {

  firstFormGroup: FormGroup;

  constructor(
    private docenteService: DocenteService,
    public dialogRef: MatDialogRef<EditarDocenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      dni: ['', Validators.required],
      cuil: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaIngDocencia: ['', Validators.required],
      fechaIngColegio: ['', Validators.required]
    });
    this.firstFormGroup.setValue({
      nombre: this.data.nombre,
      apellido: this.data.apellido,
      sexo: this.data.sexo,
      dni: this.data.dni,
      cuil: this.data.cuil,
      fechaNacimiento: this.data.fechaNacimiento,
      telefono: this.data.telefono,
      direccion: this.data.direccion,
      fechaIngDocencia: this.data.fechaIngDocencia,
      fechaIngColegio: this.data.fechaIngColegio
    })
  }

  // Editar docente
  editDocente(Docente: FormGroup) {
    console.log(Docente.value);
    this.docenteService.editarDocente(Docente.value)
      .subscribe(
        res => {
          this.snackBar.open('Docente actualizado con éxito', 'OK');
          this.dialogRef.close(true);
          console.log(res);
        }, error => {
          this.openSnackBar('No se pudo actualizar.', 'OK');
          console.log(error);
        }
      );
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }

  // Mostrar SnackBar
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
        duration: 4000
      }
    );
  }

}
