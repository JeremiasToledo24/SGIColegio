import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {

  // Iniciar FormGroup
  proveedorFormGroup: FormGroup

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<RegisterDialogComponent>,
    private _formBuilder: FormBuilder,
    private proveedorService: ProveedorService
  ) { }

  ngOnInit() {
    this.proveedorFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      cuit_cuil: ['', Validators.required],
      tipoServicio: ['', Validators.required]
    });
  }

  // Registrar proveedor
  registerProveedor(proveedorFormGroup: FormGroup) {
    if (proveedorFormGroup.valid) {
      this.proveedorService.registerProveedor(proveedorFormGroup.value).subscribe(
        res => {
          this.snackBar.open('Proveedor registrado con éxito', 'OK');
          this.dialogRef.close(true);
          console.log(res);
        }, error => {
          this.openSnackBar('No se pudo registrar el proveedor.', 'OK');
          console.log(error);
        });
    }
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }

  // Abrir snackbar
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
      duration: 1500
    }
    );
  }
}
