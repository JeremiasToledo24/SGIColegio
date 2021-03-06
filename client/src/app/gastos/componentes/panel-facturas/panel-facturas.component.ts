import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTab, MatTableDataSource, MatPaginator } from '@angular/material';
import { NuevaFacturaComponent } from '../nueva-factura/nueva-factura.component';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/servicios/factura/factura.service';
import { DialogRegistrarPagoFacturaComponent } from '../dialog-registrar-pago-factura/dialog-registrar-pago-factura.component';
import { FormControl } from '@angular/forms';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';

@Component({
  selector: 'app-panel-facturas',
  templateUrl: './panel-facturas.component.html',
  styleUrls: ['./panel-facturas.component.css']
})
export class PanelFacturasComponent implements OnInit {

  data;
  dataSource;

  proveedorControl = new FormControl('')
  proveedores = []

  dataDetalle = [];

  estadoControl = new FormControl('')

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog,
    private proveedorService: ProveedorService,
    private router: Router,
    private facturaService: FacturaService) { }



  ngOnInit() {
    this.proveedorService.getProveedores()
      .subscribe(
        res => {
          this.proveedores = res;
          console.log(res)
        }
      )
    this.facturaService.listarFacturas()
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data)
          this.dataSource = new MatTableDataSource(this.data)
          this.dataSource.paginator = this.paginator;
        }
      )

  }

  getFacturasPorProveedor() {
    console.log(this.proveedorControl.value)
    if (this.proveedorControl.value === 'N') {
      this.facturaService.listarFacturas()
        .subscribe(
          res => {
            this.data = []
            this.data = res;
            console.log(this.data)
            this.dataSource = new MatTableDataSource(this.data)
            this.dataSource.paginator = this.paginator;
          }
        )
    } else {
      this.facturaService.facturasPorProveedor(this.proveedorControl.value)
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

  openDialog(row): void {
    const dialogRef = this.dialog.open(DialogRegistrarPagoFacturaComponent, {
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'S') {
        this.registrarPago(row)
      }
    });
  }

  filtrarEstado() {
    if (this.estadoControl.value === 'N') {
      this.facturaService.facturasSinPagar()
        .subscribe(
          res => {
            this.data = []
            this.data = res;
            this.dataSource = new MatTableDataSource(this.data)
            this.dataSource.paginator = this.paginator;
          }
        )
    } else {
      this.facturaService.facturasPagadas()
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

  registrarPago(row) {
    const fecha = new Date();
    const f = (fecha.getFullYear() + '-' + ('0' + (fecha.getMonth() + 1)).slice(-2) + '-' + ('0' + fecha.getDate()).slice(-2));

    const Pago = {
      total: row.importe,
      idProveedor: row.idProveedor,
      idFormaPago: 1,
      fecha: f
    }
    this.facturaService.registrarPago(Pago)
      .subscribe(
        res => {
          let idPago = res.idPago
          this.facturaService.listarDetalleFactura(row.idFactura)
            .subscribe(
              res => {
                console.log(idPago)
                this.dataDetalle = res;
                this.dataDetalle.forEach(detalleFactura => {
                  const DetallePago = {
                    concepto: detalleFactura.concepto,
                    subtotal: detalleFactura.subtotal,
                    idFactura: row.idFactura,
                    idPago: idPago
                  }
                  console.log(DetallePago, 'detalle de pago')
                  this.facturaService.registrarDetallePago(DetallePago).
                    subscribe(
                      res => {
                        this.facturaService.listarFacturas()
                          .subscribe(
                            res => {
                              this.data = res;
                              console.log(this.data)
                              this.dataSource = new MatTableDataSource(this.data)
                            }
                          )
                      }
                    )
                });
              },
              error => {
                this.facturaService.openSnackBar('Hubo un error', 'ok')
              }

            )

        });
  }

  registrarFactura(): void {
    this.router.navigate(['/registrarFactura']);
  }

  verDetalle(idFactura): void {
    this.router.navigate(['/detalleFactura', idFactura])
  }

}
