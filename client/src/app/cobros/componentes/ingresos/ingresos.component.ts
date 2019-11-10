import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CobrosService } from 'src/app/servicios/cobros/cobros.service';
import * as jsdPDF from 'jspdf'
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ReporteIngresosComponent } from '../reporte-ingresos/reporte-ingresos.component';
import { ReportesService } from 'src/app/servicios/reportes/reportes.service';
import { Router } from '@angular/router';

class Cobro {
  constructor(importe?, fecha?, concepto?, vencimiento?,nroCuota?,dni?) {
    importe = this.importe;
    fecha = this.fecha;
    concepto = this.concepto
    vencimiento = this.vencimiento;
    nroCuota = this.nroCuota;
    dni = this.dni
  }
  concepto;
  importe;
  fecha;
  vencimiento;
  nroCuota;
  dni;
}




@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  fechaInicio = new FormControl('', Validators.required)
  fechaFin = new FormControl('', Validators.required)



  displayedColumns: string[] = ['nroCuota','mes','dni', 'vencimiento', 'fecha', 'importe'];
  data: any[] = []
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private cobrosService: CobrosService, public dialog: MatDialog,
    private reportesService: ReportesService,
    private router: Router) { }

  ngOnInit() {
    this.obtenerDetallesCobros()
  }



  obtenerDetalles() {
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
          console.log(this.data)
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator;
        }
      )
  }

  generaBoleta() {
    let total: number = 0;
    let cobros: Cobro[] = [];
    this.data.forEach(element => {
      total = total + Number(element.importe)
      cobros.push({
        dni: element.dniAlumno, concepto: element.mes, nroCuota: element.idCuota,
        vencimiento: element.vencimiento, importe: element.importe, fecha: element.fechaPago
      })
    });
    const reporte = {
      fechaI: this.fechaInicio.value,
      fechaF: this.fechaFin.value,
      total: total
    }
    cobros.push({ dni: '', concepto: '', nroCuota: '',
      vencimiento: 'Total', importe: total, fecha: ''})
    this.reportesService.cobros = cobros;
    this.reportesService.reporte = reporte;
    this.router.navigate(['/reporteIngresos']);


  }

}
