import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';


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
            console.log('res :', res);

            // Obtener nivel y division
          }
        )
    }
  }
}
