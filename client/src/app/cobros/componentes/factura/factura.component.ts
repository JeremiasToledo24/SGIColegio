import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as jsPDF from 'jspdf'
import * as html2canvas from '../../../../assets/js/html2canvas'

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
  }

  generaBoleta() {
    const pdf = new jsPDF('p', 'pt', 'a4');
    pdf.addHTML(document.getElementById('facturaPrint'), function () {
      pdf.save('factura.pdf');
    });
    /* pdf.fromHTML(document.getElementById('facturaTest'),0,0);
    pdf.save('test.pdf') */
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }
}
