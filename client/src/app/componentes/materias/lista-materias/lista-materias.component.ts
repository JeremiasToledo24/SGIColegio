import {Component, OnInit} from '@angular/core';
import {MateriaService} from 'src/app/servicios/materias/materia.service';
import {MateriaModel} from 'src/app/models/materia-model';
import {MatDialog} from '@angular/material';

import { EditarMateriaComponent} from '../editar-materia/editar-materia.component';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.css']
})
export class ListaMateriasComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nombre', 'operaciones'];
  dataSource: MateriaModel[];

  materiasSeleccionadas: MateriaModel[] = [];

  constructor(
    private materiaService: MateriaService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.materiaService.listarMaterias().subscribe(
      res => {
        this.dataSource = res as MateriaModel[];
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
  editarMateria(nombre: string, codigo: string) {
    this.openDialog(nombre, codigo);
  }

  // Abrir dialog y enviar datos para editar materia
  openDialog(nombre: string, codigo: string): void {
    const dialogRef = this.dialog.open(EditarMateriaComponent, {
      data: {
        outputNombre: nombre, outputCodigo: codigo
      }
    });
    dialogRef.afterClosed().subscribe();
  }

  // Eliminar materia
  eliminarMateria(id: number) {
    this.materiaService.eliminarMateria(id).subscribe();
  }
}
