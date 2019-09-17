import {Component, OnInit, Input} from '@angular/core';
import {CrearAulaComponent} from '../crear-aula/crear-aula.component';
import {MatDialog} from '@angular/material/dialog';
import {AulaService} from 'src/app/servicios/aula/aula.service';
import {EditarAulaComponent} from '../editar-aula/editar-aula.component';
import {ConfirmDialogComponent} from 'src/app/componentes/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { aula } from 'src/app/componentes/cursos/lista-curso/lista-curso.component';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private aulaService: AulaService,
    private router: Router
  ) {
  }

  displayedColumns: string[] = ['nombre', 'capacidad', 'disponibilidad','operaciones'];
  @Input() dataSource;

  ngOnInit() {
    this.aulaService.getAula().subscribe(
      res => {
        let data: aula[];
        data = res as aula[];
        this.dataSource = new MatTableDataSource(data);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //metodo asignar curso
  asignarCurso(aula){
    this.router.navigate(['/asignarCursos', aula.idAula]);
  }



  // Dialog para agregar aula
  openAddDialog(): void {
    const dialogRef = this.dialog.open(CrearAulaComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Create result: ${result}`);
      if (result) {
        console.log(result)
        this.aulaService.getAula().subscribe(
          res => {
            this.dataSource = res as any[];
          }
        );
      }
    });
  }

  // Dialog para editar datos del aula
  openEditDialog(Aula: any): void {
    const dialogRef = this.dialog.open(EditarAulaComponent, {
      data: {
        idAula: Aula.idAula,
        nombre: Aula.nombre,
        capacidad: Aula.capacidad,
        disponibilidad: Aula.disponibilidad
      }
    });
    dialogRef.afterClosed().subscribe(
      result => {
        console.log(`Edit result: ${result}`);
        if (result) {
          console.log(result);
          this.aulaService.getAula().subscribe(
            res => {
              this.dataSource = res as any[];
            }
          )
        }
      }
    )
  }

  // Dialog para eliminar
  openDeleteDialog(Aula: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        idAula: Aula.idAula,
        nombre: Aula.nombre
      }
    });
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Eliminar result: ${result}`);
        if (result) {
          console.log(result)
          this.aulaService.getAula().subscribe(
            res => {
              this.dataSource = res as any[];
            }
          );
        }
      }
    );
  }


}
