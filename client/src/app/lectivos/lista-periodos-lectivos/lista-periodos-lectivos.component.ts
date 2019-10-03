import { Component, OnInit } from '@angular/core';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { Planes } from 'src/app/componentes/plan-estudio/lista-planes/lista-planes.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-lista-periodos-lectivos',
  templateUrl: './lista-periodos-lectivos.component.html',
  styleUrls: ['./lista-periodos-lectivos.component.css']
})
export class ListaPeriodosLectivosComponent implements OnInit {

  displayedColumns: string[] = ['idPeriodoLectivo', 'periodo', 'nombre', 'operaciones'];
  dataSource;

  constructor(private planService: PlanEstudioService) { }

  ngOnInit() {
    this.planService.listarPeriodos().subscribe(res => {
      let data = res as Planes[]
      this.dataSource = new MatTableDataSource<Planes>(data)
    });
  }

}
