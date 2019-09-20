import { Component, OnInit, Inject } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';
import { MatSnackBar, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

class Tipos {
  nombre: string;
}

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  constructor(
    private empleadoService: EmpleadoService,
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FormacionComponent>
  ) { }

  // Definir tipos de formación
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

  // Definicion de formulario
  secondFormGroup: FormGroup;

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      annio: ['', Validators.required]
    });
  }

  // Agregar formación/experiencia
  agregarFormacion(data: any, formacionForm: NgForm) {
    this.empleadoService.agregarFormacionEmpleado({
      'tipo': formacionForm.value.tipo,
      'descripcion': formacionForm.value.descripcion,
      'año': formacionForm.value.annio,
      'DNIEmpleado': data.dni
    }).subscribe(
      res => {
        this.openSnackBar('Formación agregada con exito', 'OK')
        this.dialogRef.close(true);
      }
    )
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
