import {Component, OnInit} from '@angular/core';
import {CursoService} from 'src/app/servicios/cursos/curso.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css'],
  providers: [CursoService]

})
export class AgregarCursoComponent implements OnInit {

  public niveles = [
    {"id": 1, "nombre": "Primaria"},
    {"id": 2, "nombre": "Secundaria"}
  ]
  public divisiones = [
    {"nombre": "A"},
    {"nombre": "B"}
  ]

  constructor(private cursoService: CursoService) {
  }

  ngOnInit() {
  }

  addCurso(form: NgForm) {
    this.cursoService.agregarCurso(form.value).then(
      res => {
        console.log(res);
        this.refresh();
      }
    )
  }  

  refresh(): void {
    window.location.reload();
  }
}
