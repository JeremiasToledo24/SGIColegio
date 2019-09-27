import { Component, OnInit, Inject } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

// Clase tipos
class Tipos {
  nombre: string;
}

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  constructor(
  
    private empleadoService: EmpleadoService,
    public dialogRef: MatDialogRef<EditarEmpleadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

   // Tipo de empleado
   tipoEmpleado: Tipos[] = [
    {nombre: 'Administración'},
    {nombre: 'Ordenanza'},
    {nombre: 'Cocina'}
  ]

  // Iniciar FormGroup
  firstFormGroup: FormGroup

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
      fechaIngColegio: ['', Validators.required],
      tipoEmpleado: ['', Validators.required]
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
      fechaIngColegio: this.data.fechaIngColegio,
      tipoEmpleado: this.data.tipoEmpleado
    })
  }

  // Editar docente
  editEmpleado(Empleado: FormGroup) {
    console.log(Empleado.value);
    this.empleadoService.editEmpleado(Empleado.value)
      .subscribe(
        res => {
          this.snackBar.open('Empleado actualizado con éxito', 'OK');
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
