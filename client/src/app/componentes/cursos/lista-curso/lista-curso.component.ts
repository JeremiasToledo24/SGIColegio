import { Component, OnInit, Input } from '@angular/core';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css'],
  providers: [CursoService]
})
export class ListaCursoComponent implements OnInit {

  constructor(
    private cursoService: CursoService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) {
  }

  displayedColumns: string[] = ['nombre', 'division', 'nivel', 'operaciones'];
  @Input() dataSource: any[];

  ngOnInit() {
    this.cursoService.listarCursos().then(
      res => {
        this.dataSource = res as any[];
      }
    );
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
        this.cursoService.listarCursos().then(
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
        this.cursoService.listarCursos().then(
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
