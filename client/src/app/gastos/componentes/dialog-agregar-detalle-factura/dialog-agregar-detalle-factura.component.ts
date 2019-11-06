import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-agregar-detalle-factura',
  templateUrl: './dialog-agregar-detalle-factura.component.html',
  styleUrls: ['./dialog-agregar-detalle-factura.component.css']
})
export class DialogAgregarDetalleFacturaComponent implements OnInit {
  detalleForm = this.fb.group({
    conceptoControl: ['', Validators.required],
    subtotalControl: ['', Validators.required],
    cantidadControl: ['', Validators.required],
    unitarioControl: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private proveedorService: ProveedorService,
    public dialogRef: MatDialogRef<DialogAgregarDetalleFacturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  agregarDetalle() {
    if (this.detalleForm.valid) {
      this.dialogRef.close({
        concepto: this.detalleForm.value.conceptoControl, subtotal: this.detalleForm.value.subtotalControl,
        precioUnitario: this.detalleForm.value.unitarioControl, cantidad: this.detalleForm.value.cantidadControl
      });
    } else {
      this.proveedorService.openSnackBar('Complete los datos', 'OK')
    }
  }

}
