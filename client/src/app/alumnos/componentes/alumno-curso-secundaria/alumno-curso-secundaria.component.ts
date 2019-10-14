import { Component, OnInit, ViewChild } from '@angular/core';
import { Ciclos } from 'src/app/docentes/componentes/docente-primaria/docente-primaria.component';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';
import { MatDialog, MatAccordion } from '@angular/material';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { DialogoEliminarComponent } from '../dialogo-eliminar/dialogo-eliminar.component';
import { DialogInscribirComponent } from '../dialog-inscribir/dialog-inscribir.component';

// Clase alumno
export class Alumno {
  dni;
  nombre;
  apellido;
  constructor(dni, n, a) {
    this.dni = dni;
    this.nombre = n;
    this.apellido = a;
  }
}

// Clase curso
export class Curso {
  nivel;
  curso;
  division;
  constructor(n, c, d) {
    this.nivel = n;
    this.curso = c;
    this.division = d;
  }
}

@Component({
  selector: 'app-alumno-curso-secundaria',
  templateUrl: './alumno-curso-secundaria.component.html',
  styleUrls: ['./alumno-curso-secundaria.component.css']
})
export class AlumnoCursoSecundariaComponent implements OnInit {

  ciclos: Ciclos[];
  divisionControl = new FormControl('', Validators.required);
  cicloControl = new FormControl('', Validators.required);
  listaPrimero: Alumno[] = [];
  listaSegundo: Alumno[] = [];
  listaTercero: Alumno[] = [];
  listaCuarto: Alumno[] = [];
  listaQuinto: Alumno[] = [];

  constructor(private alumnoService: AlumnoService,
    private planService: PlanEstudioService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.planService.listarPeriodos(2)
      .subscribe(
        res => {
          this.ciclos = res as Ciclos[]
          console.log('this.ciclos :', this.ciclos);
        }
      )
  }

  //CIERRA EL ACORDEON
  @ViewChild('accordion', { static: true }) Accordion: MatAccordion
  closeAllPanels() {
    this.Accordion.closeAll();
  }

  /* obtener alumnos por curso */
  obtenerAlumnos(nivel, curso) {
    if (curso === 'PRIMERO') {
      this.alumnoService.getAlumnosInscriptos(this.cicloControl.value, curso, this.divisionControl.value, nivel)
        .subscribe(
          (res) => {
            this.listaPrimero = []
            res.forEach(element => {
              this.listaPrimero.push(element)
            });
          });
    }
    if (curso === 'SEGUNDO') {
      this.alumnoService.getAlumnosInscriptos(this.cicloControl.value, curso, this.divisionControl.value, nivel)
        .subscribe(
          (res) => {
            this.listaSegundo = []
            res.forEach(element => {
              this.listaSegundo.push(element)
            });
          });
    }
    if (curso === 'TERCERO') {
      this.alumnoService.getAlumnosInscriptos(this.cicloControl.value, curso, this.divisionControl.value, nivel)
        .subscribe(
          (res) => {
            this.listaTercero = []
            res.forEach(element => {
              this.listaTercero.push(element)
            });
          });
    }
    if (curso === 'CUARTO') {
      this.alumnoService.getAlumnosInscriptos(this.cicloControl.value, curso, this.divisionControl.value, nivel)
        .subscribe(
          (res) => {
            this.listaCuarto = []
            res.forEach(element => {
              this.listaCuarto.push(element)
            });
          });
    }
    if (curso === 'QUINTO') {
      this.alumnoService.getAlumnosInscriptos(this.cicloControl.value, curso, this.divisionControl.value, nivel)
        .subscribe(
          (res) => {
            this.listaQuinto = []
            res.forEach(element => {
              this.listaQuinto.push(element)
            });
          });
    }

  }

  dialogoEliminar(alumno, curso) {
    const dialogRef = this.dialog.open(DialogoEliminarComponent, {
      data: { alumno: alumno }
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      if (result.match('S')) {
        this.eliminarAlumno(alumno.idInscripcionAlumnoSecundaria, curso)
      }
    });
  }

  eliminarAlumno(id, curso) {
    this.alumnoService.bajaAlumno(id)
      .subscribe(
        res => {
          this.alumnoService.openSnackBar('El alumno fue desvinculado del curso', 'ok');
          this.obtenerAlumnos(2, curso);
        }
      )
  }

  inscribirAlumno(alumno, curso) {
    const dialogRef = this.dialog.open(DialogInscribirComponent, {
      width: '600px',
      data: { idPeriodo: this.cicloControl.value, curso: curso, division: this.divisionControl.value, nivel: 2 }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerAlumnos(2, curso)
    });
  }


}
