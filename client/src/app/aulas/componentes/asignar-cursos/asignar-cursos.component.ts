import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaService } from 'src/app/servicios/aula/aula.service';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { MatTableDataSource } from '@angular/material';

/* INTERFACES: */
export interface Cursos {
  nombre;
  nivel;
  division;
  operaciones;
}


@Component({
  selector: 'app-asignar-cursos',
  templateUrl: './asignar-cursos.component.html',
  styleUrls: ['./asignar-cursos.component.css']
})
export class AsignarCursosComponent implements OnInit {
  /* id */
  id;

  /* aula selecciada */
  displayedColumns: string[] = ['nombre', 'capacidad', 'disponibilidad'];
  dataSource: any[];
  /* recursos de la tabla cursos */
  cursosData: Cursos[] = [];
  dataSourceC = new MatTableDataSource<Cursos>(this.cursosData);
  displayedColumnsC: string[] = ['nombre', 'division', 'nivel', 'operaciones'];
  /* recursos de la tabla de cursos asignados */
  cursosAsginadosData: Cursos[] = [];
  dataSourceA = new MatTableDataSource<Cursos>(this.cursosAsginadosData);
  displayedColumnsA: string[] = ['nombre', 'division', 'nivel', 'operaciones'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aulasService: AulaService,
    private cursosService: CursoService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.aulasService.getAulaByID(id)
      .subscribe(
        (res) => {
          this.dataSource = [];
          this.dataSource.push(res);
        }
      )
    this.cursosSinAula();
    this.cursosAsignados();

  }

  /* listar cursos asignados al aula*/
  cursosAsignados() {
    this.aulasService.getCursos(this.id)
      .subscribe(
        res => {
          this.cursosAsginadosData = [];
          this.cursosAsginadosData = res as any[];
          this.dataSourceA = new MatTableDataSource<Cursos>(this.cursosAsginadosData)
        }
      )
  }

  /* listar cursos sin aula */
  cursosSinAula() {
    this.cursosService.listarCursosSinAula()
      .subscribe(
        res => {
          this.cursosData = [];
          this.cursosData = res as any[];
          this.dataSourceC = new MatTableDataSource<Cursos>(this.cursosData);
        }
      )
  }
  /* filtro de la tabla de todos los cursos */
  applyFilter(filterValue: string) {
    this.dataSourceC.filter = filterValue.trim().toLowerCase();
  }

  /* metodo que agrega cursos a las aulas */
  vincular(curso) {
    const _mat = this.cursosAsginadosData.filter(
      x => x.nombre === curso.nombre
    );
    if (_mat.length === 0) {
      curso.idAula = this.id;
      this.cursosService.asignarAula(curso)
        .subscribe(
          res => {
            this.cursosAsginadosData.push(curso);
            this.dataSourceA = new MatTableDataSource(this.cursosAsginadosData);
            this.aulasService.openSnackBar('curso vinculado', 'ok');
            this.cursosSinAula();

          }
        );

    } else {
      this.aulasService.openSnackBar('el curso ya esta en la lista', 'ok');
    }

  }
  /* desvincular curso */
  desvincular(curso) {
    curso.idAula = null;
    this.cursosService.asignarAula(curso)
      .subscribe(
        res => {
          this.aulasService.openSnackBar('curso desvinculado', 'ok');
          this.cursosAsginadosData = this.cursosAsginadosData.filter(
            x => x.nombre !== curso.nombre
          );
          this.dataSourceA = new MatTableDataSource(this.cursosAsginadosData);
          this.cursosSinAula();
        }
      )

  }

  cancelar() {
    this.router.navigate(['Aulas']);

  }

  /*  guardarCambios() {
     this.aulasService.desvincularTodosCursos(this.id)
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
 
   } */



}
