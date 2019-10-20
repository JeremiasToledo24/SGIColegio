import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as jsdPDF from 'jspdf'

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  fecha;
  nombreAlumno

  constructor(public dialogRef: MatDialogRef<FacturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data)
    const f = new Date();
    this.fecha = (f.getDate() + '-' + (f.getMonth() + 1) + '-' + f.getFullYear());
    
  }

  generaBoleta() {
    const doc = new jsdPDF();
    doc.fromHTML(document.getElementById('facturaPrint'),10,10);
    doc.save('facturaPrint');
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }
}
