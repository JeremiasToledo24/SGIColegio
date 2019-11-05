import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

export class Tipo {
  tipo: String;
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private proveedorService: ProveedorService,
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  // Iniciar FormGroup
  proveedorForm: FormGroup;

  // Combo
  tipoServicio: Tipo[] = [
    { tipo: 'PRODUCTO' },
    { tipo: 'SERVICIO' }
  ];

  ngOnInit() {
    this.proveedorForm = this._formBuilder.group({
      idProveedor: ['', Validators.required],
      nombre: ['', Validators.required],
      cuit_cuil: ['', Validators.required],
      tipoServicio: ['', Validators.required]
    });

    this.proveedorForm.setValue({
      idProveedor: this.data.idProveedor,
      nombre: this.data.nombre,
      cuit_cuil: this.data.cuit_cuil,
      tipoServicio: this.data.tipoServicio
    });
  }

  // Editar
  editProveedor(Proveedor: FormGroup) {
    this.proveedorService.editProveedor(Proveedor.value).subscribe(
      res => {
        this.snackBar.open('Proveedor actualizado con éxito', 'OK');
        this.dialogRef.close(true);
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
