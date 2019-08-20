import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AgregarMateriaComponent } from './agregar-materia/agregar-materia.component';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { MateriaModel } from 'src/app/models/materia-model';


@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {
  constructor(public dialog: MatDialog, private materiaService: MateriaService) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AgregarMateriaComponent, {});
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
