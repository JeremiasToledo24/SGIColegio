import { Component, OnInit, HostListener } from '@angular/core';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { CursoModel } from 'src/app/models/curso-model';

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.css']
})
export class PlanEstudioComponent implements OnInit {

  public annios = [
    { "anio": "2019" },
    { "anio": "2020" },
    { "anio": "2021" },
    { "anio": "2022" },
    { "anio": "2023" },
    { "anio": "2024" },
    { "anio": "2025" },
    { "anio": "2026" },
    { "anio": "2027" },
    { "anio": "2028" },
    { "anio": "2029" },
    { "anio": "2030" }
  ];

  public cursos: [];

  public niveles = [
    { "idNivel": "1", "nombre": "Primaria" },
    { "idNivel": "2", "nombre": "Secundaria" }
  ]

  id: number;


  constructor(private planService: PlanEstudioService, private cursoService: CursoService) { }

  ngOnInit() {
    this.cursos = [];

  }

  buscarPorNivel(id: number) {
     this.cursoService.obtenerCursosPorNivel(id).subscribe(
      (res: CursoModel[]) => { 
        this.hola(res);
       })
  }

  hola(resp){
    this.cursos = resp;
    console.log(this.cursos)
  }



}
