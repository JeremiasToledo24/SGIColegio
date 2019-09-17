import { Component, OnInit, Input } from '@angular/core';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { MatSnackBar, MatDialog, MatTableDataSource } from '@angular/material';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { AulaService } from 'src/app/servicios/aula/aula.service';


export class curso {
  nombre;
  division;
  nivel;
  idAula;
  aula;
}

export class aula {
  idAula;
  nombre;
  capacidad;
  disponibilidad;
}
@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css'],
  providers: [CursoService]
})


export class ListaCursoComponent implements OnInit {

  constructor(
    private cursoService: CursoService,
    private aulaService: AulaService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {
  }

  displayedColumns: string[] = ['nombre', 'division', 'nivel', 'aula', 'operaciones'];


  @Input() dataSource;

  ngOnInit() {
    this.cursoService.listarCursos().subscribe(
      (res: curso[]) => {
        let data: curso[] = [];
        res.forEach(element => {
          data.push(element)
        });
        data.forEach(element => {
          console.log()
          if (element.idAula === null) {
            element.aula = 'Sin Aula Asignada';
          } else {
            this.aulaService.getAulaByID(element.idAula)
              .subscribe(
                (res: aula) => {
                  if (res) {
                    element.aula = res.nombre;
                  }
                }
              )
          }


        });
        this.dataSource = new MatTableDataSource(data);

      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Delete dialog
  deleteDialog(Curso: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        idCurso: Curso.idCurso,
        nombre: Curso.nombre,
        division: Curso.division,
        nivel: Curso.idNivel
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Eliminar result: ${result}`);
      if (result) {
        console.log(result)
        this.cursoService.listarCursos().subscribe(
          res => {
            this.dataSource = res as any[];
          }
        );
      }
    }
    );
  }

  // Edit dialog
  openEditDialog(Curso: any) {
    const dialogRef = this.dialog.open(EditarCursoComponent, {
      data: {
        idCurso: Curso.idCurso,
        nombre: Curso.nombre,
        division: Curso.division,
        idNivel: Curso.idNivel
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Edit result: ${result}`);
      if (result) {
        console.log(result)
        this.cursoService.listarCursos().subscribe(
          res => {
            this.dataSource = res as any[];
          }
        );
      }
    }
    );
  }
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
      duration: 4000
    }
    );
  }



}
