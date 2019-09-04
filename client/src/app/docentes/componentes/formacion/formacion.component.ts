import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DocenteService} from 'src/app/servicios/docentes/docente.service';
import {MatSnackBar} from '@angular/material';

class Tipos {
  nombre: string;
}

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {
  tipos: Tipos[] = [
    {nombre: 'Título Secundario'},
    {nombre: 'Título Terciario'},
    {nombre: 'Título Universitario'},
    {nombre: 'Maestria'},
    {nombre: 'Doctorado'},
    {nombre: 'Certificacion'},
    {nombre: 'Curso'},
    {nombre: 'Capacitacion'}
  ];

  secondFormGroup: FormGroup;

  constructor(private _snackBar: MatSnackBar,
              private _formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<FormacionComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private docenteService: DocenteService
  ) {
  }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      annio: ['', Validators.required]
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  agregarFormacion(data: any, formacionForm: NgForm) {
    this.docenteService.agregarFormacionDocente({
      'tipo': formacionForm.value.tipo,
      'descripcion': formacionForm.value.descripcion,
      'annio': formacionForm.value.annio,
      'DNIDocente': data.dni
    }).subscribe(
      res => {
        this.openSnackBar('Formacion agregada con exito', 'OK')
        this.dialogRef.close(true);
      }
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
