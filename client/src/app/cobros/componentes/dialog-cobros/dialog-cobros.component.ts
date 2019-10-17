import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-cobros',
  templateUrl: './dialog-cobros.component.html',
  styleUrls: ['./dialog-cobros.component.css']
})
export class DialogCobrosComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogCobrosComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(op): void {
    this.dialogRef.close(op);
  }

}
