import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-config',
  templateUrl: './dialog-config.component.html',
  styleUrls: ['./dialog-config.component.css']
})
export class DialogConfigComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogConfigComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }
}
