import { Component, OnInit } from '@angular/core';
import {  CursoService  } from "../../servicios/cursos/curso.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursoService]

})
export class CursosComponent implements OnInit {

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
  }

}
