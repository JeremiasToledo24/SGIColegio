import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';
import { FormControl } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

export class Cuota {
  dniAlumno: number;
  idCuota: number;
  idInscripcionAlumno: number;
  idPeriodo: number;
  importe: number;
  mes: string;
  nroCuota: number;
  saldo: number;
  vencimiento1: string;
  vencimiento2: string;
}

export class Cobro {
  fecha: string;
  dniAlumno: number;
  idFormaPago: number;
}

export class DetalleCobro {
  nroCuota: number;
  importe: number;
  idCobro: number;
  idCuota: number;
}


@Component({
  selector: 'app-cobros',
  templateUrl: './cobros.component.html',
  styleUrls: ['./cobros.component.css']
})
export class CobrosComponent implements OnInit {

  dniControl = new FormControl('')
  alumno = '';
  nombreAlumno = '';
  cursoAlumno = '';
  divisionAlumno = ''
  nivelAlumno = '';

  dataSource1;
  dataSource2;
  constructor(
    private alumnoService: AlumnoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  // Redirigir a configuración de factura
  configFactura() {
    this.router.navigate(['/configFactura']);
  }

  // Buscador
  buscarAlumno(event: any) {
    if (event.code === 'Enter') {
      this.alumnoService.getAlumnoDNI(this.dniControl.value)
        .subscribe(
          res => {
            // Solo nombre
            this.nombreAlumno = res.apellido + ', ' + res.nombre;

            // Resto de datos
            this.alumno = res;

            // Obtener nivel y division
            this.alumnoService.getCursoDivision(this.dniControl.value)
              .subscribe(
                res => {
                  this.cursoAlumno = res[0].curso;
                  this.divisionAlumno = res[0].division;
                  this.nivelAlumno = res[0].nivel;
                  this.getCuotas(res[0].DNIAlumno, res[0].idPeriodo)
                }
              )
          }
        )
    }
  }

  getCuotas(dni, idPeriodo) {
    this.alumnoService.getCuotasAlumno(dni, idPeriodo)
      .subscribe(
        res => {
          console.log('res :', res);
          this.dataSource1 = new MatTableDataSource<Cuota>(res)
        }
      )
  }

  pagarCuota(boleta) {
    var f = new Date();
    const fecha = (f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate());
    const cobro = new Cobro();
    cobro.fecha = fecha;
    cobro.dniAlumno = this.dniControl.value;
    cobro.idFormaPago = 1;

    this.alumnoService.nuevoCobro(cobro)
      .subscribe(
        res => {
          const idCobro = res.idCobro;
          const detalleCobro = new DetalleCobro();
          detalleCobro.idCobro = idCobro;
          detalleCobro.nroCuota = boleta.nroCuota;
          detalleCobro.importe = boleta.importe;
          detalleCobro.idCuota = boleta.idCuota;

          this.alumnoService.nuevoDetalle(detalleCobro)
          .subscribe(
            res =>{
              console.log('res :', res);
            }
          )

        }
      )
  }
}


