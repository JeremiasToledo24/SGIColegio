import { Component, OnInit } from '@angular/core';
import { FacturaService } from 'src/app/servicios/factura/factura.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DialogRegistrarPagoFacturaComponent } from '../dialog-registrar-pago-factura/dialog-registrar-pago-factura.component';

class Factura {
  nombre;
  codigo;
  puntoVenta;
  letra;
  fechaEmision;
  fechaVencimiento;
  importe;
  idProveedor
}

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html',
  styleUrls: ['./detalle-factura.component.css']
})
export class DetalleFacturaComponent implements OnInit {

  data;
  dataSource;
  factura: Factura;
  public idFactura: string;


  constructor(private facturaService: FacturaService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.factura = new Factura;
    this.idFactura = this.route.snapshot.paramMap.get('id')

    this.facturaService.getFacturaID(this.idFactura)
      .subscribe(
        (res) => {
          this.factura = res as Factura;
          console.log(this.factura)
        },
        error => {
          this.facturaService.openSnackBar('Hubo un error', 'ok')
        }
      )

    this.facturaService.listarDetalleFactura(this.idFactura)
      .subscribe(
        res => {
          this.data = res;
          this.dataSource = new MatTableDataSource(this.data)
        },
        error => {
          this.facturaService.openSnackBar('Hubo un error', 'ok')
        }

      )


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRegistrarPagoFacturaComponent, {
      data: ''
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'S') {
        this.registrarPago()
      }
    });
  }





  registrarPago() {
    const fecha = new Date();
    const f = (fecha.getFullYear() + '-' + ('0' + (fecha.getMonth()+1)).slice(-2) + '-' + ('0' + fecha.getDate()).slice(-2) );
    
    const Pago = {
      total: this.factura.importe,
      idProveedor: this.factura.idProveedor,
      idFormaPago: 1,
      fecha: f
    }
    this.facturaService.registrarPago(Pago)
      .subscribe(
        res => {
          this.data.forEach(detalleFactura => {
            const DetallePago = {
              concepto: detalleFactura.concepto,
              subtotal: detalleFactura.subtotal,
              idFactura: this.idFactura,
              idPago: res.idPago
            }
            this.facturaService.registrarDetallePago(DetallePago).
              subscribe(
                res => {
                  this.facturaService.getFacturaID(this.idFactura)
                    .subscribe(
                      (res) => {
                        this.factura = res as Factura;
                        console.log(this.factura)
                      },
                      error => {
                        this.facturaService.openSnackBar('Hubo un error', 'ok')
                      }
                    )
                }
              )
          });
        });
  }

  volver() {
    this.router.navigate(['/gastos']);

  }


}
