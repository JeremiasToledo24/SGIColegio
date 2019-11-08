import { Component, OnInit, Inject } from '@angular/core';
import * as jsPDF from 'jspdf'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-reporte-ingresos',
  templateUrl: './reporte-ingresos.component.html',
  styleUrls: ['./reporte-ingresos.component.css']
})
export class ReporteIngresosComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReporteIngresosComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(this.data)
  }

  generaBoleta() {
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(document.getElementById('to-pdf'), function () {
      pdf.save('factura.pdf');
    });
  }

}
