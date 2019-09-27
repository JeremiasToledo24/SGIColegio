import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-agregar-plan',
  templateUrl: './agregar-plan.component.html',
  styleUrls: ['./agregar-plan.component.css']
})
export class AgregarPlanComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AgregarPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  crearPlan(){
    
  }

}
