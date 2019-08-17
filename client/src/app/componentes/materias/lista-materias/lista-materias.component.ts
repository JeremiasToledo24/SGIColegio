import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { MateriaModel } from 'src/app/models/materia-model';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.css']
})
export class ListaMateriasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'codigo', 'nombre', 'operaciones'];
  dataSource: MateriaModel[];
  materiasSeleccionadas: MateriaModel[] = [];
  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    // this.materiaService.listarMaterias().then(
    //   res => {
    //     this.dataSource = res as MateriaModel[];
    //     console.log(this.dataSource);
    //   }
    // );
  }

  agregar(materia: MateriaModel){
   
    if (this.materiasSeleccionadas.some(mat => mat.nombre === materia.nombre)) {
      console.log('la materia ya esta en la lista');
    } else {
      this.materiasSeleccionadas.push(materia);
      console.log(materia);
    }
    
  }
}

