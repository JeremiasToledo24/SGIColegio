import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSnackBar, MatDialog, MatAccordion } from '@angular/material';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { Ciclos } from 'src/app/docentes/componentes/docente-primaria/docente-primaria.component';
import { DialogInscribirComponent } from '../dialog-inscribir/dialog-inscribir.component';
import { DialogoEliminarComponent } from '../dialogo-eliminar/dialogo-eliminar.component';

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
  selector: 'app-alumno-curso',
  templateUrl: './alumno-curso.component.html',
  styleUrls: ['./alumno-curso.component.css']
})
export class AlumnoCursoComponent implements OnInit {

  constructor(
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private planService: PlanEstudioService,
    public dialog: MatDialog
  ) { }

  ciclos: Ciclos[];
  divisionControl = new FormControl('', Validators.required);
  cicloControl = new FormControl('', Validators.required);
  listaPrimero: Alumno[] = [];
  listaSegundo: Alumno[] = [];
  listaTercero: Alumno[] = [];
  listaCuarto: Alumno[] = [];
  listaQuinto: Alumno[] = [];
  listaSexto: Alumno[] = [];
  listaSeptimo: Alumno[] = [];
  listaAlumnos: Alumno[] = [] = []

  // Stepper
  isLinear = true;

  // Datos de tabla ALUMNO
  displayedColumns: string[] = ['dni', 'apellido', 'nombre', 'seleccionar'];
  @Input() dataSource;

  // Datos de tabla CURSO
  columnasCurso: string[] = ['nivel', 'curso', 'division', 'seleccionar'];
  @Input() dataCurso;

  // Paginador
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // FormGroups
  alumnoFormGroup: FormGroup;
  cursoFormGroup: FormGroup;

  // Variables
  AlumnoDNI: number;
  CursoID: number;

  ngOnInit() {

    this.alumnoFormGroup = this._formBuilder.group({
      seleccionado: ['', Validators.required]
    });

    this.cursoFormGroup = this._formBuilder.group({
      seleccionado: ['', Validators.required]
    });

    // Obtener alumnos
    this.alumnoService.getAlumnos().subscribe(
      res => {
        let data: Alumno[];
        data = res as Alumno[];
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    );

    // Obtener cursos
    this.cursoService.listarCursos().subscribe(
      res => {
        let data: Curso[];
        data = res as Curso[];
        this.dataCurso = new MatTableDataSource(data);
        this.dataCurso.paginator = this.paginator;
      }
    );

    this.planService.listarPeriodos(1)
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
    if (curso === 'SEXTO') {
      this.alumnoService.getAlumnosInscriptos(this.cicloControl.value, curso, this.divisionControl.value, nivel)
        .subscribe(
          (res) => {
            this.listaSexto = []
            res.forEach(element => {
              this.listaSexto.push(element)
            });
          });
    }
    if (curso === 'SEPTIMO') {
      this.alumnoService.getAlumnosInscriptos(this.cicloControl.value, curso, this.divisionControl.value, nivel)
        .subscribe(
          (res) => {
            this.listaSeptimo = []
            res.forEach(element => {
              this.listaSeptimo.push(element)
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
        this.eliminarAlumno(alumno.idInscripcionAlumno, curso)
      }
    });
  }

  eliminarAlumno(id,curso) {
    this.alumnoService.bajaAlumno(id)
      .subscribe(
        res => {
          this.alumnoService.openSnackBar('El alumno fue desvinculado del curso', 'ok');
          this.obtenerAlumnos(1,curso);
        }
      )
  }

  inscribirAlumno(alumno, curso) {
    const dialogRef = this.dialog.open(DialogInscribirComponent, {
      width: '600px',
      data: { idPeriodo: this.cicloControl.value, curso: curso, division: this.divisionControl.value, nivel: 1 }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerAlumnos(1, curso)
    });
  }


  // Buscador 
  buscadorForm = new FormGroup({
    data: new FormControl('', Validators.required)
  });
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Alumno seleccionado
  seleccionAlumno(Alumno: any) {
    this.AlumnoDNI = Alumno.DNIAlumno
    console.log(this.AlumnoDNI)
  }

  // Curso seleccionado
  seleccionCurso(Curso: any) {
    this.CursoID = Curso.idCurso
    console.log(this.CursoID)
  }

  // Asignar alumno
  asignarAlumno() {
    this.alumnoService.asignAlumno({
      'DNIAlumno': this.AlumnoDNI,
      'idCurso': this.CursoID
    }).subscribe(
      res => {
        this.openSnackBar('Alumno asignado con exito', 'OK');
      }, error => {
        this.openSnackBar('Hubo un error', 'OK');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
