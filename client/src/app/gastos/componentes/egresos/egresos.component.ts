import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/servicios/factura/factura.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  data;
  dataSource;
  total: number;
  fechaInicio = new FormControl('', Validators.required)
  fechaFin = new FormControl('', Validators.required)


  proveedorControl = new FormControl('')
  proveedores = []

  dataDetalle = [];

  estadoControl = new FormControl('')

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private proveedorService: ProveedorService,
    private router: Router,
    private facturaService: FacturaService) { }

  ngOnInit() {
    this.proveedorService.getProveedores()
      .subscribe(
        res => {
          this.proveedores = res;
        }
      )
    this.listarPagos()

  }

  getFacturasPorProveedor() {
    if (this.proveedorControl.value === 'N') {
      this.listarPagos()
    } else {
      this.facturaService.listarPagosProveedor(this.proveedorControl.value)
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listarPagos() {
    this.facturaService.listarPagos()
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
    this.listarPagos()

  }

  obtenerPagosEntreFechas() {
    if (this.proveedorControl.value === '' || this.proveedorControl.value === 'N') {
      this.facturaService.listarPagosEntreFechas(this.fechaInicio.value, this.fechaFin.value)
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
      this.obtenerPagosEntreFechasProveedor()
    }

  }

  obtenerPagosEntreFechasProveedor() {
    this.facturaService.listarPagosEntreFechasProveedor(this.fechaInicio.value, this.fechaFin.value, this.proveedorControl.value)
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





}
