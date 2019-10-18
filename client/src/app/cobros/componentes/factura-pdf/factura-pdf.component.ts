import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-factura-pdf',
  templateUrl: './factura-pdf.component.html',
  styleUrls: ['./factura-pdf.component.css']
})
export class FacturaPDFComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FacturaPDFComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
