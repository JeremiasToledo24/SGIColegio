import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Materia } from 'src/app/docentes/componentes/docente-materia/asignar-materia/asignar-materia.component';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { FormControl, Validators } from '@angular/forms';
import { ListaAnios } from '../plan-estudio.component';

@Component({
  selector: 'app-dialog-materias',
  templateUrl: './dialog-materias.component.html',
  styleUrls: ['./dialog-materias.component.css']
})
export class DialogMateriasComponent implements OnInit {
  nombreControl = new FormControl('', Validators.required);
  displayedColumns: string[] = ['codigo', 'nombre', 'quitar'];
  dataSource = new MatTableDataSource<Materia>();
  dataSourceS = new MatTableDataSource<Materia>();
  listaMaterias: Materia[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private materiaService: MateriaService, private planService: PlanEstudioService,
    public dialogRef: MatDialogRef<DialogMateriasComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    /* inicia el dataSoruce, que muestra la lista de materias seleccionadas */
    this.materiaService.listarMaterias()
      .subscribe(
        res => {
          let materias;
          materias = res as Materia;
          this.dataSource = new MatTableDataSource<Materia>(materias)
          this.dataSource.paginator = this.paginator;

        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /* quitar la materia de la lista de materias seleccionadas */
  quitar(materia) {
    this.listaMaterias = this.listaMaterias.filter(obj => obj.codigo !== materia.codigo);
    console.log(this.listaMaterias)
    this.dataSourceS = new MatTableDataSource<Materia>(this.listaMaterias)
  }

  /* agregar materias a la lista de materias seleccionadas */
  agregar(materia) {
    const _mat = this.listaMaterias.filter(
      x => x.codigo === materia.codigo
    );
    if (_mat.length === 0) {
      this.listaMaterias.push(materia);
      this.dataSourceS = new MatTableDataSource<Materia>(this.listaMaterias)
    } else {
      this.planService.openSnackBar('la materia ya esta en la lista');
    }
  }

  cerrar() {
    this.dialogRef.close();
  }

  onNoClick(): void {
    if (this.nombreControl.valid && this.listaMaterias.length > 0) {
      this.dialogRef.close({ nombreAnio: this.nombreControl.value, listaMaterias: this.listaMaterias });
    }
  }


}
