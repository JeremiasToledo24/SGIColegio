import {Component, OnInit} from '@angular/core';
import {PlanEstudioService} from 'src/app/servicios/planEstudio/plan-estudio.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../confirm-dialog/confirm-dialog.component';
import {PlanEstudioModel} from 'src/app/models/plan-estudio-model';

/* clase de planes */
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
  /* variables para mostrar lista */
  displayedColumns: string[] = ['nombre','anio', 'Nivel', 'materiacodigo', 'materianombre', 'operaciones'];
  dataSource: Planes[];

  constructor(private planService: PlanEstudioService, public dialog: MatDialog) {
  }

  ngOnInit() {
    /* listar planes  */
    this.planService.listarPlanes().subscribe(res => {
      this.dataSource = res as Planes[];
    });
  }

  /* trigger para la el dialogo de eliminar plan */
  eliminarPlan(plan: any) {
    this.openDialog(plan)
  }

  /* dialogo de eliminar plan */
  openDialog(plan: Planes) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        id: plan.id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Eliminar result: ${result}`);
      if (result) {
        this.planService.listarPlanes().subscribe(
          res => {
            this.dataSource = res as Planes[];
          }
        );
      }
    });
  }
}


