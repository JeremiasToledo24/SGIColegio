import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';

@Component({
  selector: 'app-ver-plan',
  templateUrl: './ver-plan.component.html',
  styleUrls: ['./ver-plan.component.css']
})
export class VerPlanComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<VerPlanComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private planService: PlanEstudioService) { }

    materiasPlan =[];

  ngOnInit() {

    this.planService.listarMateriasPlan(this.data.plan.idPlanEstudio)
      .subscribe(
        res => {
          this.materiasPlan = res;
          console.log('this.materiasPlan :', this.materiasPlan);
        }
      )
  }

  onNoClick(){
    this.dialogRef.close()
  }

}
