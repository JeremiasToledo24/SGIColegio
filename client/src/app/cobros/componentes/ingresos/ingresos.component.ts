import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CobrosService } from 'src/app/servicios/cobros/cobros.service';
import * as jsdPDF from 'jspdf'
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ReporteIngresosComponent } from '../reporte-ingresos/reporte-ingresos.component';

class Cobro {
  constructor(importe?, fecha?, concepto?) {
    importe = this.importe;
    fecha = this.fecha;
    concepto = this.concepto
  }
  concepto;
  importe;
  fecha
}

/* class Reporte {
  constructor(fechaI, fechaF, concepto, total) {
    fechaI = this.fechaI;
    fechaF = this.fechaF;
    concepto = this.concepto
    total = this.total
  }
  fechaI;
  fechaF;
  concepto;
  total;
} */


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  //today: number = Date.now();

  fechaInicio = new FormControl('', Validators.required)
  fechaFin = new FormControl('', Validators.required)
  conceptoReporte = new FormControl('')


  displayedColumns: string[] = ['mes', 'importe', 'fecha'];
  data: any[] = []
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private cobrosService: CobrosService, public dialog: MatDialog) { }

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

  filtrarConcepto() {
    if (this.conceptoReporte.value === 'CUOTA') {
      this.data = this.data.filter(obj => obj.mes !== 'MATRICULA')
    }else{
      this.data = this.data.filter(obj => obj.mes === 'MATRICULA')
    }
    this.dataSource = new MatTableDataSource(this.data)
    this.dataSource.paginator = this.paginator;
  }

  resetFiltro(){
    this.obtenerDetallesCobros()
  }

  generaBoleta() {
    let total: number = 0;
    let cobros: Cobro[] = [];
    console.log(this.conceptoReporte.value)
    this.data.forEach(element => {
      total = total + Number(element.importe)
      cobros.push({ concepto: element.mes, importe: element.importe, fecha: element.fecha })
    });
    const reporte = {
      fechaI: this.fechaInicio.value,
      fechaF: this.fechaFin.value,
      concepto: this.conceptoReporte.value,
      total: total
    }
    const dialogRef = this.dialog.open(ReporteIngresosComponent, {
      data: { cobros, reporte }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
