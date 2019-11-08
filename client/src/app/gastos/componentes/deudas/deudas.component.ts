import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/servicios/factura/factura.service';
import { ReportesService } from 'src/app/servicios/reportes/reportes.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styleUrls: ['./deudas.component.css']
})
export class DeudasComponent implements OnInit {
  data;
  dataSource;
  total: number;
  fechaInicio = new FormControl('', Validators.required)
  fechaFin = new FormControl('', Validators.required)
  proveedorControl = new FormControl('')
  proveedores = []
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private proveedorService: ProveedorService,
    private router: Router,
    private facturaService: FacturaService,
    private reportesService: ReportesService) { }

  ngOnInit() {
    this.proveedorService.getProveedores()
      .subscribe(
        res => {
          this.proveedores = res;
        }
      )
      this.listarFacturasConSaldo()
  }

  getFacturasPorProveedor() {
    if (this.proveedorControl.value === 'N') {
      this.listarFacturasConSaldo()
    } else {
      this.facturaService.listarFacturasSinPagarProveedor(this.proveedorControl.value)
        .subscribe(
          res => {
            this.data = []
            this.data = res;
            this.dataSource = new MatTableDataSource(this.data)
            this.dataSource.paginator = this.paginator;
          }
        )
    }
  }

  listarFacturasConSaldo() {
    this.facturaService.facturasSinPagar()
      .subscribe(
        res => {
          this.data = []
          this.data = res;
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator;
        }
      )
  }

  reset() {
    this.fechaInicio.reset()
    this.fechaFin.reset()
    this.listarFacturasConSaldo()

  }

  obtenerFacturasConSaldoEntreFechas() {
    if (this.proveedorControl.value === '' || this.proveedorControl.value === 'N') {
      this.facturaService.facturasSinPagarEntreFechas(this.fechaInicio.value, this.fechaFin.value)
        .subscribe(
          res => {
            this.data = [];
            this.data = res;
            console.log(this.data)
            this.dataSource = new MatTableDataSource(this.data)
            this.dataSource.paginator = this.paginator;
          }
        )
    } else {
      this.obtenerFacturasEntreFechasProveedor()
    }

  }
  obtenerFacturasEntreFechasProveedor() {
    this.facturaService.listarFacturasEntreFechasProveedor(this.fechaInicio.value, this.fechaFin.value, this.proveedorControl.value)
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
    let deudas = [];
    this.data.forEach(element => {
      total = total + Number(element.importe)
      deudas.push({ codigo: element.codigo,proveedor: element.nombre, importe: element.importe, fecha: element.fechaVencimiento })
    });
    const reporte = {
      fechaI: this.fechaInicio.value,
      fechaF: this.fechaFin.value,
      total: total.toFixed(2)
    }
    this.reportesService.deudas = deudas;
    this.reportesService.reporte = reporte;

     this.router.navigate(['/reporteDeudas']);


  }

}
