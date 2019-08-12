import { Component, OnInit } from '@angular/core';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { MateriaModel } from 'src/app/models/materia-model';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './lista-materias.component.html',
  styleUrls: ['./lista-materias.component.css']
})
export class ListaMateriasComponent implements OnInit {
  lista: MateriaModel[];
  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.materiaService.listarMaterias();
    this.lista = this.materiaService.listaMaterias;
  }

}
