import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { CursoService } from 'src/app/servicios/cursos/curso.service';

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
    private snackBar: MatSnackBar
  ) { }

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
  asignarAlumno(){
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
