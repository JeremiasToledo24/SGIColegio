import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { ConfirmDialogComponent } from 'src/app/componentes/confirm-dialog/confirm-dialog.component';

export class Proveedor {
  nombre;
  cuit_cuil;
  tipoServicio;
  constructor(n, c, t) {
    this.nombre = n;
    this.cuit_cuil = c;
    this.tipoServicio = t;
  }
}

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  // Variable dataSource de proveedores
  @Input() dataSource;

  // Paginador
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private proveedorService: ProveedorService
  ) { }

  ngOnInit() {
    // Cargar lista de proveedores registrados
    this.proveedorService.getProveedores().subscribe(
      res => {
        let data: Proveedor[];
        data = res as Proveedor[];
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  // Buscador
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Dialogo para registrar
  registerDialog(Empleado: any) {
    const dialogRef = this.dialog.open(RegisterDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Register result: ${result}`);
      if (result) {
        console.log(result)
        this.proveedorService.getProveedores().subscribe(
          res => {
            this.dataSource = res as any[];
          }
        );
      }
    }
    );
  }

  // Dialogo para editar
  editDialog(Proveedor: any) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: {
        idProveedor: Proveedor.idProveedor,
        nombre: Proveedor.nombre,
        cuit_cuil: Proveedor.cuit_cuil,
        tipoServicio: Proveedor.tipoServicio
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Edit result: ${result}`);
      if (result) {
        console.log(result)
        this.proveedorService.getProveedores().subscribe(
          res => {
            this.dataSource = res as any[];
          }
        );
      }
    }
    );
  }
}
