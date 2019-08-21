import { Component, OnInit } from '@angular/core';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
class Planes {
  id: number;
  anniodelplan: string;
  Nivel: string;
  Curso: string;
  idMateria: number;
  materiacodigo: string;
  materianombre: string;
  constructor() {
  }
}
@Component({
  selector: 'app-lista-planes',
  templateUrl: './lista-planes.component.html',
  styleUrls: ['./lista-planes.component.css']
})


export class ListaPlanesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'anniodelplan', 'Nivel', 'Curso', 'idMateria', 'materiacodigo', 'materianombre', 'operaciones'];
  dataSource: Planes[];
  constructor(private planService: PlanEstudioService, public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.planService.listarPlanes().subscribe(res => {
      this.dataSource = res as Planes[]
      console.log(res)
    });
  }

  eliminarPlan(plan: any) {
    this.dialogo(plan);
  }

  dialogo(plan: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        idPlan: plan.idPlan
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Eliminar result: ${result}`);
      if (result) {
        console.log(result)
        this.planService.listarPlanes().subscribe(
          x => {
            this.dataSource = x as Planes[];
          }
        );
      }
    }
    );
  }

}


