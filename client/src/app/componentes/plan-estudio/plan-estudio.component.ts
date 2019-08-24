import {Component, OnInit, OnChanges} from '@angular/core';
import {PlanEstudioService} from 'src/app/servicios/planEstudio/plan-estudio.service';
import {CursoService} from 'src/app/servicios/cursos/curso.service';
import {map, startWith} from 'rxjs/operators';
import {CursoModel} from 'src/app/models/curso-model';
import {NgForm, FormControl} from '@angular/forms';
import {MateriaModel} from 'src/app/models/materia-model';
import {MateriaService} from 'src/app/servicios/materias/materia.service';
import {Observable} from 'rxjs';
import {PlanEstudioModel} from 'src/app/models/plan-estudio-model';
import {MatDialog} from '@angular/material';

//CLASE PLAN X MATERIA
class PlanMat {
  idPlan: number;
  idMateria: number;

  constructor(idPlan, idMateria) {
    this.idPlan = idPlan;
    this.idMateria = idMateria;
  }
}

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
    {'anio': '2019'},
    {'anio': '2020'},
    {'anio': '2021'},
    {'anio': '2022'},
    {'anio': '2023'},
    {'anio': '2024'},
    {'anio': '2025'},
    {'anio': '2026'},
    {'anio': '2027'},
    {'anio': '2028'},
    {'anio': '2029'},
    {'anio': '2030'}
  ];
  public niveles = [
    {'idNivel': '1', 'nombre': 'Primaria'},
    {'idNivel': '2', 'nombre': 'Secundaria'}
  ];
  cursos: CursoModel[] = [];
  listaCurso = [];
  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<string[]>;
  displayedColumns: string[] = ['codigo', 'nombre', 'quitar'];
  dataSource: MateriaModel[];


  constructor(private planService: PlanEstudioService, private cursoService: CursoService, private materiaService: MateriaService,
              public dialog: MatDialog
  ) {
  }


  ngOnInit() {
    /* inicia el dataSoruce, que muestra la lista de materias seleccionadas */
    this.dataSource = this.materiaService.listaMateriasSeleccionadas;
    this.nombre = '';
    this.getListaMaterias();
    /* funcion que filtra la lista desplegable */
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  /* quitar la materia de la lista de materias seleccionadas */
  quitar(materia: any) {
    this.materiaService.listaMateriasSeleccionadas = this.materiaService.listaMateriasSeleccionadas.filter(obj => obj !== materia);
    this.dataSource = this.materiaService.listaMateriasSeleccionadas;
  }


  // TODO
  // REEMPLAZAR POR UNA VISTA
  /* busca cursos segun el nivel seleccionado */
  buscarPorNivel(id: number) {
    this.listaCurso = [];
    this.cursos = [];
    const obtCursos = this.cursoService.obtenerCursosPorNivel(id)
      .pipe(
        map((curso) => curso)
      );
    let curso = obtCursos
      .subscribe(x => {
        this.cursos = x;
        this.cursos.forEach(element => {
          this.listaCurso.push({'nombre': element.nombre, 'idCurso': element.idCurso});
        });
      });
  }

  //AUN NO FUNCIONA
  /* ????? */
  buscar(form: NgForm) {
    form.reset();
  }

  /* agrega materias a la lista de materias seleccionadas */
  agregarMateriaALista(codigo: string, buscarForm: NgForm) {
    //selecciona la materia desde la lista completa
    const materia = this.materiaService.listaCompletaMaterias.filter(
      x => x.codigo === codigo);
    //verifica que la materia no este en la lista de seleccionadas
    const _mat = this.materiaService.listaMateriasSeleccionadas.filter(
      x => x.codigo === codigo
    );
    console.log(_mat, '_mat');
    if (_mat.length === 0) {
      this.materiaService.listaMateriasSeleccionadas = this.materiaService.listaMateriasSeleccionadas.concat(materia);
      this.dataSource = this.materiaService.listaMateriasSeleccionadas;
      buscarForm.reset();
    } else {
      this.planService.openSnackBar('la materia ya esta en la lista');
    }
  }

  /* parte de la funcion que filtra las materias del buscador */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  /* obtener la lista de materias */
  getListaMaterias() {
    const _Materias = this.materiaService.listarMaterias()
      .pipe(
        map((materia) => materia)
      );
    let _lista = _Materias
      .subscribe((x: MateriaModel[]) => {
          x.forEach(element => {
            this.materiaService.listaCompletaMaterias.push(element);
            this.options.push({'codigo': element.codigo, 'nombre': element.nombre});
          });
        }
      );
  }

  /* crear plan de estudio */
  crearPlan(planForm: NgForm, dataSource: MateriaModel[]) {
    if (!(planForm.value.annio === undefined) && (dataSource.length > 0)) {
      let plan = new PlanEstudioModel(planForm.value.annio, planForm.value.idCurso, planForm.value.idNivel);
      this.planService.agregarPlan(plan).subscribe(
        (res: PlanEstudioModel) => {
          this.planService.openSnackBar('El plan fue crado en la base de datos');
          dataSource.forEach(element => {
            let planxmateria = new PlanMat(res.idPlanEstudio, element.idMateria);
            this.materiaService.agregarMatPlan(planxmateria).subscribe(
              x => {
                this.planService.openSnackBar('Materia Agregada al Plan');
              }
            );
          });
        }
      );
    } else {
      console.log('error');
    }

  }
}

