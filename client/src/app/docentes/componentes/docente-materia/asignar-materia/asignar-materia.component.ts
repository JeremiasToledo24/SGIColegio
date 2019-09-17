import {Component, OnInit, Inject, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DocenteService} from 'src/app/servicios/docentes/docente.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource, MatPaginator} from '@angular/material';
import {MateriaService} from 'src/app/servicios/materias/materia.service';



export class Docente {
  dni;
  nombre;
  apellido;
  constructor(dni, n,a) {
    this.dni = dni;
    this.nombre = n;
    this.apellido = a;

  }
}

export interface Materia {
  idMateria;
  codigo;
  nombre;
}

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

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  /* datos del docente */
  docenteData: Docente[] = [{dni: 0, nombre: 0, apellido: 0}];
  displayedColumns: string[] = ['dni', 'nombre', 'apellido'];
  dataSource = new MatTableDataSource(this.docenteData);


  /* datos de las materias vinculadas */
  materiasDocente: Materia[];
  displayedColumnsMateriasVinculadas: string[] = ['codigo', 'nombre', 'operaciones'];
  dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente)

  /* datos de todas las materias */
  materias: Materia[];
  displayedColumnsMaterias: string[] = ['codigo', 'nombre', 'operaciones'];
  dataSourceMaterias = new MatTableDataSource(this.materias);

  /* constructor */
  constructor(    
    private route: ActivatedRoute,
    private docenteService: DocenteService,
    private materiaService: MateriaService,
    private router: Router,

  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    /* obtiene las materias asignadas a los docentes */
    this.docenteService.obtenerMateriasDocente(this.id)
      .subscribe(
        (res) => {
          this.materiasDocente = res
          this.dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente);
        })
    /* obtiene todas las materias de la bd */
    this.materiaService.listarMaterias()
      .subscribe(
        (res: Materia[]) => {
          this.materias = res;
          this.dataSourceMaterias = new MatTableDataSource(this.materias);
          this.dataSourceMaterias.paginator = this.paginator;
        }
      )
      this.docenteService.obtenerDocentesDNI(this.id)
      .subscribe(
        (res: Docente) => {
          this.docenteData = [];
          this.docenteData.push(res)
          this.dataSource = new MatTableDataSource(this.docenteData);

        }
      )
  }
  /* filtro de la tabla materias */
  applyFilter(filterValue: string) {
    this.dataSourceMaterias.filter = filterValue.trim().toLowerCase();
  }
  /* agrega materias a la lista de materias vinculadas */
  add(materia) {
    const _mat = this.materiasDocente.filter(
      x => x.codigo === materia.codigo
    );
    if (_mat.length === 0) {
      this.materiasDocente.push(materia);
      this.dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente);
    } else {
      this.docenteService.openSnackBar('la materia ya esta en la lista', 'ok');
    }

  }
  /* desvincular materia */
  desvincular(materia) {
    this.materiasDocente = this.materiasDocente.filter(
      x => x.codigo !== materia.codigo
    );
    this.dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente);

  }

  cancelar(){
    this.router.navigate(['docenteMateria',]);

  }
  guardarCambios() {
    /* desvincula todas las materias */
    this.docenteService.desvincularTodasMaterias(this.id)
      .subscribe(
        res => {
          this.materiasDocente.forEach(element => {
            let dat = new MateriaDocente(element.idMateria, this.id);
            this.docenteService.asignarMateria(dat)
              .subscribe(
                res => console.log(res)
              )
          })
          this.docenteService.openSnackBar("Cambios Guardados", "ok");
        }), null,
      () => {
      }
      this.router.navigate(['docenteMateria']);

  }

}
