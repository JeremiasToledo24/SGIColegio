import { Component, OnInit, OnChanges } from '@angular/core';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { map, startWith } from 'rxjs/operators';
import { CursoModel } from 'src/app/models/curso-model';
import { NgForm, FormControl } from '@angular/forms';
import { MateriaModel } from 'src/app/models/materia-model';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-plan-estudio',
  templateUrl: './plan-estudio.component.html',
  styleUrls: ['./plan-estudio.component.css']
})
export class PlanEstudioComponent implements OnInit {
  nombre: string;
  //TODO
  //REEMPLAZAR POR FUNCION QUE OBTENGA ANNIOS
  //TODO
  //REEMPLAZAR POR GET DESDE TABLA
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
  public niveles = [
    { "idNivel": "1", "nombre": "Primaria" },
    { "idNivel": "2", "nombre": "Secundaria" }
  ]
  cursos: CursoModel[] = [];
  listaCurso = []
  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<string[]>;
  displayedColumns: string[] = ['id', 'codigo', 'nombre'];
  dataSource: MateriaModel[];


  constructor(private planService: PlanEstudioService, private cursoService: CursoService, private materiaService: MateriaService) { }

  ngOnInit() {
    this.dataSource = this.materiaService.listaMateriasSeleccionadas;
    this.nombre = '';
    this.getListaMaterias();
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  //TODO
  //REEMPLAZAR POR UNA VISTA
  buscarPorNivel(id: number) {
    this.listaCurso = [];
    this.cursos = [];
    const obtCursos = this.cursoService.obtenerCursosPorNivel(id)
      .pipe(
        map((curso) => curso)
      )
    let curso = obtCursos
      .subscribe(x => {
        this.cursos = x;
        this.cursos.forEach(element => {
          this.listaCurso.push({ "nombre": element.nombre, "idCurso": element.idCurso });
        });
      });
  }

  //AUN NO FUNCIONA
  buscar(form: NgForm) {
    form.reset();
  }

  agregarMateriaALista(codigo: string, buscarForm: NgForm) {
    //selecciona la materia desde la lista completa
    const materia = this.materiaService.listaCompletaMaterias.filter(
      x => x.codigo === codigo);
    //verifica que la materia no este en la lista de seleccionadas
    const _mat = this.materiaService.listaMateriasSeleccionadas.filter(
      x => x.codigo === codigo
    )
    console.log(_mat, '_mat')
    if (_mat.length === 0) {
      this.materiaService.listaMateriasSeleccionadas = this.materiaService.listaMateriasSeleccionadas.concat(materia);
      this.dataSource = this.materiaService.listaMateriasSeleccionadas;
      buscarForm.reset();
    } else {
      this.planService.openSnackBar('la materia ya esta en la lista');
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  getListaMaterias() {
    const _Materias = this.materiaService.listarMaterias()
      .pipe(
        map((materia) => materia)
      )
    let _lista = _Materias
      .subscribe((x: MateriaModel[]) => {
        x.forEach(element => {
          this.materiaService.listaCompletaMaterias.push(element);
          this.options.push({ "codigo": element.codigo, "nombre": element.nombre });
        });
      }
      )

  }

  crearPlan(planForm: NgForm, dataSource){
    console.log(planForm.value,'plan');
    console.log(dataSource);
  }

}

