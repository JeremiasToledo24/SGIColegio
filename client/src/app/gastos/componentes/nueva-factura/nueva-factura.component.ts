import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import * as moment from 'moment';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { DialogAgregarDetalleFacturaComponent } from '../dialog-agregar-detalle-factura/dialog-agregar-detalle-factura.component';
import { FacturaService } from 'src/app/servicios/factura/factura.service';
@Component({
  selector: 'app-nueva-factura',
  templateUrl: './nueva-factura.component.html',
  styleUrls: ['./nueva-factura.component.css']
})
export class NuevaFacturaComponent implements OnInit {

  displayedColumns: string[] = ['concepto', 'subtotal', 'op'];
  data: any[] = []
  dataSource = new MatTableDataSource(this.data);

  totalFactura: number = 0;

  facturaForm = this.fb.group({
    proveedorControl: ['', Validators.required],
    fechaEmisionControl: ['', Validators.required],
    fechaVencimientoControl: ['', Validators.required],
    facturaPagadaControl: ['', Validators.required],
    codigoControl: ['', Validators.required],
    letraControl: ['', Validators.required],
    puntoVentaControl: ['', Validators.required]
  });


  proveedores;


  constructor(
    private proveedorService: ProveedorService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private facturaService: FacturaService) { }

  ngOnInit() {
    this.proveedorService.getProveedores()
      .subscribe(
        res => {
          this.proveedores = res;
          console.log(res)
        }
      )
  }

  onSubmit() {
    if (this.data.length > 0) {
      const Factura = {
        fechaEmision: moment(this.facturaForm.value.fechaEmisionControl).format('YYYY/MM/DD'),
        fechaVencimiento: moment(this.facturaForm.value.fechaVencimientoControl).format('YYYY/MM/DD'),
        importe: this.totalFactura.toFixed(2),
        idProveedor: this.facturaForm.value.proveedorControl,
        letra: this.facturaForm.value.letraControl,
        codigo: this.facturaForm.value.codigoControl,
        puntoVenta: this.facturaForm.value.puntoVentaControl,
        saldo: this.totalFactura.toFixed(2)
      }
      this.facturaService.registrarFactura(Factura)
        .subscribe(
          res => {
            this.data.forEach(detalle => {
              const DetalleFactura = {
                idFactura: res.idFactura,
                concepto: detalle.concepto,
                subtotal: detalle.subtotal
              }
              this.facturaService.registrarDetalleFactura(DetalleFactura)
                .subscribe(
                  res => {},
                  error => {
                    this.facturaService.openSnackBar('Hubo un error', 'Ok')
                  }
                )
            });
            this.facturaForm.reset();
            this.totalFactura = 0,
            this.data = [];
            this.dataSource = new MatTableDataSource(this.data);
          },
          error => {
            this.facturaService.openSnackBar('Hubo un error', 'Ok')
          }
        )
    }
  }

  eliminarDetalle(detalle) {
    this.data = this.data.filter(item => item.concepto !== detalle.concepto);
    this.dataSource = new MatTableDataSource(this.data)
    this.calcularTotal()
    console.log(this.data)
  }

  agregarDetalle() {
    const dialogRef = this.dialog.open(DialogAgregarDetalleFacturaComponent, {
      data: ''
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result !== undefined) {
        this.data.push(result)
        this.dataSource = new MatTableDataSource(this.data)
        this.calcularTotal()
      }
    });
  }

  calcularTotal() {
    this.totalFactura = 0
    this.data.forEach(element => {
      this.totalFactura = this.totalFactura + Number(element.subtotal)
    });
  }

}