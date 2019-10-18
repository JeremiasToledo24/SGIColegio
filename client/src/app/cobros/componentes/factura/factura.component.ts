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
    @Inject(MAT_DIALOG_DATA) public data) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    const f = new Date();
    this.fecha = (f.getDate() + '-' + (f.getMonth() + 1) + '-' + f.getFullYear());
    console.log('this.data :', this.data);
    const doc = new jsdPDF();
    doc.fromHTML(document.getElementById('factura'), 10, 10);
    doc.save('factura');
    this.onNoClick();
  }

}
