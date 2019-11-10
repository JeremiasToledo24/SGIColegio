import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CobrosService } from 'src/app/servicios/cobros/cobros.service';
import { ReportesService } from 'src/app/servicios/reportes/reportes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.css']
})
export class SaldosComponent implements OnInit {


  fechaInicio = new FormControl('', Validators.required)
  fechaFin = new FormControl('', Validators.required)

  displayedColumns: string[] = ['nroCuota', 'mes', 'dni', 'vencimiento1', 'importe',];
  data: any[] = []
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private cobrosService: CobrosService,
    private reportesService: ReportesService,
    private router: Router) { }

  ngOnInit() {
    this.obtenerCuotasConSaldo()
  }

  obtenerCuotasConSaldo() {
    this.cobrosService.obtenerCuotasConSaldo()
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
    this.obtenerCuotasConSaldo()

  }

  obtenerCuotasEntreFechas() {
    this.cobrosService.obtenerCuotasEntreFechas(this.fechaInicio.value, this.fechaFin.value)
      .subscribe(
        res => {
          this.data = [];
          this.data = res;
          console.log(this.data)
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator;
        })
  }

  generaBoleta() {
    let total: number = 0;
    let cuotas = [];
    this.data.forEach(element => {
      total = total + Number(element.saldo)
      cuotas.push({ concepto: element.mes, importe: element.saldo, fecha: element.vencimiento1 })
    });
    const reporte = {
      fechaI: this.fechaInicio.value,
      fechaF: this.fechaFin.value,
      total: total
    }

    cuotas.push({ concepto: 'Total', importe: total, fecha: '' })




    this.reportesService.cuotas = cuotas;
    this.reportesService.reporte = reporte;

    this.router.navigate(['/reportesCuotas']);


  }


}
