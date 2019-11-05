import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

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
    var pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(document.getElementById('to-pdf'), function () {
      pdf.save('factura.pdf');
    });
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }
}
