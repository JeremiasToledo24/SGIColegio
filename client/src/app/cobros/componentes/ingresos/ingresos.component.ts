import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CobrosService } from 'src/app/servicios/cobros/cobros.service';
import * as jsdPDF from 'jspdf'
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  //today: number = Date.now();

  fechaInicio = new FormControl('', Validators.required)
  fechaFin = new FormControl('', Validators.required)


  displayedColumns: string[] = ['mes', 'importe', 'fecha'];
  data: [] = []
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private cobrosService: CobrosService) { }

  ngOnInit() {
    this.obtenerDetallesCobros()
  }

  obtenerDetalles() {
    console.log(this.fechaInicio.value, this.fechaFin.value)
    this.cobrosService.obtenerDetallesCobrosEntreFechas(this.fechaInicio.value, this.fechaFin.value)
      .subscribe(
        res => {
          this.data = [];
          this.data = res;
          console.log(this.data)
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator;
        }
      )
  }

  reset() {
    this.fechaInicio.reset()
    this.fechaFin.reset()
    this.obtenerDetallesCobros()

  }

  obtenerDetallesCobros() {
    this.cobrosService.obtenerDetallesCobros()
      .subscribe(
        res => {
          this.data = [];
          this.data = res;
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator;
        }
      )
  }
  /* generaBoleta() {
    const doc = new jsdPDF();
    doc.fromHTML(document.getElementById('facturaPrint'),10,10);
    doc.save('facturaPrint');
  } */

}
