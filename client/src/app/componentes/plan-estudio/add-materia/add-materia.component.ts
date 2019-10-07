import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-materia',
  templateUrl: './add-materia.component.html',
  styleUrls: ['./add-materia.component.css']
})
export class AddMateriaComponent implements OnInit {

  materia = new FormGroup({
    materiaControl: new FormControl('',Validators.required),
    codigoControl: new FormControl('',Validators.required)
  })
  

  constructor(
    public dialogRef: MatDialogRef<AddMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close(this.materia.value);
  }

  ngOnInit() {
  }

}
