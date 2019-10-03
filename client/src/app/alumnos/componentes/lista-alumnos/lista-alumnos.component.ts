import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';
import { Router } from '@angular/router';

// Clase alumno
export class Alumno {
  dni;
  nombre;
  apellido;

  constructor(
    dni, nombre, apellido
  ) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  constructor(
    private alumnoService: AlumnoService,
    private router: Router
  ) { }

  // Datos de tabla
  displayedColumns: string[] = ['dni', 'apellido', 'nombre','operaciones'];
  @Input() dataSource;

  // Paginador
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.alumnoService.getAlumnos().subscribe(
      res => {
        let data: Alumno[];
        data = res as Alumno[];
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  // Redirigir a perfil
  verPerfil(DNIAlumno) {
    this.router.navigate(['/perfilAlumno', DNIAlumno]);
  }

}
