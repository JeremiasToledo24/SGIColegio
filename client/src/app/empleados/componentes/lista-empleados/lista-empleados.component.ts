import { Component, OnInit, Input } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';
import { MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { ConfirmDialogComponent } from 'src/app/componentes/confirm-dialog/confirm-dialog.component';
import { EditarEmpleadoComponent } from '../editar-empleado/editar-empleado.component';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { FormacionComponent } from '../formacion/formacion.component';

export class Empleado {
  dni;
  nombre;
  apellido;
  tipoEmpleado;
  constructor(dni, n, a, te) {
    this.dni = dni;
    this.nombre = n;
    this.apellido = a;
    this.tipoEmpleado = te;
  }
}

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  constructor(
    private empleadoService: EmpleadoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) { }

  // Datos de tabla
  displayedColumns: string[] = ['dni', 'apellido', 'nombre','tipoEmpleado','operaciones'];
  @Input() dataSource;
  

  ngOnInit() {
    this.empleadoService.getEmpleados().subscribe(
      res => {
        let data: Empleado[];
        data = res as Empleado[];
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }

  // Borrar Empleado
  borrarEmpleado(Empleado: any) {
    this.dialogo(Empleado);
  }

  // Dialogo para borrar
  dialogo(Empleado: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        nombre: Empleado.nombre,
        apellido: Empleado.apellido,
        dni: Empleado.dni,
        tipoEmpleado: Empleado.tipoEmpleado
      }
    });
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Eliminar result: ${result}`);
        if (result) {
          console.log(result)
          this.empleadoService.getEmpleados().subscribe(
            res => {
              this.dataSource = res as any[];
            }
          );
        }
      }
    );
  }

  // Dialogo para editar empleado
  openEditDialog(Empleado: any): void {
    const dialogRef = this.dialog.open(EditarEmpleadoComponent, {
      data: {
        nombre: Empleado.nombre,
        apellido: Empleado.apellido,
        sexo: Empleado.sexo,
        dni: Empleado.dni,
        cuil: Empleado.cuil,
        fechaNacimiento: Empleado.fechaNacimiento,
        telefono: Empleado.telefono,
        direccion: Empleado.direccion,
        fechaIngColegio: Empleado.fechaIngColegio,
        tipoEmpleado: Empleado.tipoEmpleado
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Eliminar result: ${result}`);
      if (result) {
        console.log(result)
        this.empleadoService.getEmpleados().subscribe(
          res => {
            this.dataSource = res as any[];
          }
        );
      }
    });
  }

  // Redirigir a empleados historicos
  listaHistoricos() {
    this.router.navigate(['/listaEmpleadosHistoricos']);
  }

  // Abrir snackbar
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
        duration: 4000
      }
    );
  }


  // Buscador 
  buscadorForm = new FormGroup({
    data: new FormControl('', Validators.required)
  });
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Redirigir al perfil del empleado
  verPerfil(dni) {
    this.router.navigate(['/perfilEmpleado', dni]);
  }

  //Agregar formacion
  agregarFormacion(Empleado: any) {
    this.dialogoFormacion(Empleado);
  }

  dialogoFormacion(Empleado: any) {
    const dialogRef = this.dialog.open(FormacionComponent, {
      data: {
        dni: Empleado.dni
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        this.empleadoService.getEmpleados().subscribe(
          res => {
            this.dataSource = res as any[];
          }
        );
      }
    });
  }

  // Limpiar buscador
  limpiar() {
    this.buscadorForm.reset();
    this.empleadoService.getEmpleadosHistorico().subscribe(
      res => {
        this.dataSource = res as any[];
      }
    );
  }
}
