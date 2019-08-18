import { Component, OnInit } from '@angular/core';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
class Planes {
  id:number;
  anniodelplan: string;
  Nivel: string;
  Curso: string;
  idMateria: number;
  materiacodigo: string;
  materianombre: string;
  constructor() {
  }
}
@Component({
  selector: 'app-lista-planes',
  templateUrl: './lista-planes.component.html',
  styleUrls: ['./lista-planes.component.css']
})


export class ListaPlanesComponent implements OnInit {
  displayedColumns: string[] = ['id','anniodelplan','Nivel','Curso','idMateria','materiacodigo','materianombre', 'operaciones'];
  dataSource: Planes[];
  constructor(private planService: PlanEstudioService) { }

  ngOnInit() {
    this.planService.listarPlanes().subscribe(res => {
      this.dataSource = res as Planes[]
      console.log(res)
    });
  }

  eliminarPlan(id:number){
    this.planService.eliminarPlan(id).subscribe( res => console.log(id))
  }

}
