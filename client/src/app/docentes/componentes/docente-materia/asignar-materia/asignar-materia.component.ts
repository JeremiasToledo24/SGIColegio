import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';

// Clase DOCENTE
export class Docente {
  dni;
  nombre;
  apellido;
  constructor(dni, n, a) {
    this.dni = dni;
    this.nombre = n;
    this.apellido = a;
  }
}

// Clase MATERIA
export class Materia {
  idMateria;
  codigo;
  nombre;
}

// Clase MATERIA - DOCENTE
export class MateriaDocente {
  constructor(idM, idD) {
    this.idDocente = idD;
    this.idMateria = idM;
  }
  id;
  idMateria;
  idDocente;
}

@Component({
  selector: 'app-asignar-materia',
  templateUrl: './asignar-materia.component.html',
  styleUrls: ['./asignar-materia.component.css']
})
export class AsignarMateriaComponent implements OnInit {
  public id: string;
  d: Docente;

  // Paginador
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  // Datos del docente
  docenteData: Docente[] = [{ dni: 0, nombre: 0, apellido: 0 }];
  displayedColumns: string[] = ['dni', 'nombre', 'apellido'];
  dataSource = new MatTableDataSource(this.docenteData);

  // Datos de las materias vinculadas
  materiasDocente: Materia[] =[];
  displayedColumnsMateriasVinculadas: string[] = ['codigo', 'nombre', 'operaciones'];
  dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente)

  // Datos de las materias
  materias: Materia[];
  displayedColumnsMaterias: string[] = ['codigo', 'nombre', 'operaciones'];
  dataSourceMaterias = new MatTableDataSource(this.materias);

  // CONSTRUCTOR
  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private materiaService: MateriaService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    // Obtiene las materias asignadas a los docentes
    this.empleadoService.getEmpleadosDocentesDNI(this.id)
      .subscribe(
        (res) => {
          this.materiasDocente = res
          this.dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente);
        })

    // Obtiene todas las materias de la bd
    this.materiaService.listarMaterias()
      .subscribe(
        (res: Materia[]) => {
          this.materias = res;
          this.dataSourceMaterias = new MatTableDataSource(this.materias);
          this.dataSourceMaterias.paginator = this.paginator;
        }
      )
    this.empleadoService.getEmpleadosDocentesDNI(this.id)
      .subscribe(
        (res: Docente) => {
          this.docenteData = [];
          this.docenteData.push(res)
          this.dataSource = new MatTableDataSource(this.docenteData);

        }
      )
  }

  // Buscador de materias
  applyFilter(filterValue: string) {
    this.dataSourceMaterias.filter = filterValue.trim().toLowerCase();
  }

  // Agrega las materias a la lista de materias a vincular
  add(materia) {
    const mat = this.materiasDocente.filter(
      x => x.codigo === materia.codigo
    )
    if (mat.length === 0) {
      this.materiasDocente.push(materia);
      this.dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente);
    } else {
      this.openSnackBar('La materia ya esta en la lista', 'OK');
    }
  }
  
  // Desvincular materia del docente (lo elimina de la lista)
  desvincular(materia) {
    this.materiasDocente = this.materiasDocente.filter(
      x => x.codigo !== materia.codigo
    );
    this.dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente);

  }

  // Cancelar operación
  cancelar() {
    this.router.navigate(['docenteMateria',]);
  }

  // Guardar cambios
  guardarCambios() {
    /* desvincula todas las materias */
    this.empleadoService.desvincularTodasMaterias(this.id)
      .subscribe(
        res => {
          this.materiasDocente.forEach(element => {
            let dat = new MateriaDocente(element.idMateria, this.id);
            this.empleadoService.asignarMateria(dat)
              .subscribe(
                res => console.log(res)
              )
          })
          this.openSnackBar("Cambios Guardados", "OK");
        }), null,
      () => {
      }
    this.router.navigate(['docenteMateria']);

  }

  // Mostrar SnackBar
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
      duration: 4000
    }
    );
  }

}
