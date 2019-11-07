import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog-registrar-pago-factura',
  templateUrl: './dialog-registrar-pago-factura.component.html',
  styleUrls: ['./dialog-registrar-pago-factura.component.css']
})
export class DialogRegistrarPagoFacturaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogRegistrarPagoFacturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(op): void {
    this.dialogRef.close(op);
  }
  ngOnInit() {
  }

}
