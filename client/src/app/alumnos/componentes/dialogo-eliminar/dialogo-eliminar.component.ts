import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialogo-eliminar',
  templateUrl: './dialogo-eliminar.component.html',
  styleUrls: ['./dialogo-eliminar.component.css']
})
export class DialogoEliminarComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogoEliminarComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(op): void {
    this.dialogRef.close(op);
  }

  ngOnInit() {
  }

}
