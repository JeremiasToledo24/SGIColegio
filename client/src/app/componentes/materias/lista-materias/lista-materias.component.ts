import { Component, OnInit, Input } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { MateriaModel } from 'src/app/models/materia-model';
import { MatDialog } from '@angular/material';

import { EditarMateriaComponent } from '../editar-materia/editar-materia.component';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.css']
})
export class ListaMateriasComponent implements OnInit {

  displayedColumns: string[] = ['codigo','nombre','operaciones'];
  @Input() dataSource: MateriaModel[];

  materiasSeleccionadas: MateriaModel[] = [];

  constructor(
    private materiaService: MateriaService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.materiaService.listarMaterias().subscribe(
      res => {
        this.materiaService.datasource = res as MateriaModel[];
      }
    );
  }

  agregar(materia: MateriaModel) {
    if (this.materiasSeleccionadas.some(mat => mat.nombre === materia.nombre)) {
      console.log('la materia ya esta en la lista');
    } else {
      this.materiasSeleccionadas.push(materia);
    }
  }

  // TODO
  // Arreglar estas dos funciones junto el HTML

  // Editar materia
  editarMateria(materia: any) {
    this.openDialog(materia);
  }
  // Eliminar materia

  eliminarMateria(materia: any) {
    this.dialogo(materia);

  }
  dialogo(materia: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        nombre: materia.nombre,
        idMateria: materia.idMateria,
        codigo: materia.codigo
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Eliminar result: ${result}`);
      if (result) {
        console.log(result)
        this.materiaService.listarMaterias().subscribe(
          x => {
            this.materiaService.datasource = x as MateriaModel[];
          }
        );
      }
    }
    );
  }

  // Abrir dialog y enviar datos para editar materia
  openDialog(materia: any): void {
    const dialogRef = this.dialog.open(EditarMateriaComponent, {
      data: {
        nombre: materia.nombre,
        idMateria: materia.idMateria,
        codigo: materia.codigo
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Editar result: ${result}`);
      if (result) {
        this.materiaService.listarMaterias().subscribe(
          res => {
            this.materiaService.datasource = res as MateriaModel[];
          }
        );
      }
    });
  }

}
