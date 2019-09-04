import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource } from '@angular/material';
import { MateriaService } from 'src/app/servicios/materias/materia.service';

export interface Docente {
  dni;
  nombre;
  apellido;
}

export interface Materia {
  idMateria;
  codigo;
  nombre;
}

export class MateriaDocente {
  constructor(idM, idD) {
    this.idDocente = idD;
    this.idMateria = idM;
  }
  id;
  idMateria;
  idDocente;
}

@Component({
  selector: 'app-asignar-materia',
  templateUrl: './asignar-materia.component.html',
  styleUrls: ['./asignar-materia.component.css']
})
export class AsignarMateriaComponent implements OnInit {

  /* datos del docente */
  docenteData: Docente[] = [{ dni: this.data.dni, nombre: this.data.nombre, apellido: this.data.apellido }];
  displayedColumns: string[] = ['dni', 'nombre', 'apellido'];
  dataSource = new MatTableDataSource(this.docenteData);


  /* datos de las materias vinculadas */
  materiasDocente: Materia[];
  displayedColumnsMateriasVinculadas: string[] = ['codigo', 'nombre'];
  dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente)

  /* datos de todas las materias */
  materias: Materia[];
  displayedColumnsMaterias: string[] = ['codigo', 'nombre', 'operaciones'];
  dataSourceMaterias = new MatTableDataSource(this.materias);

  /* constructor */
  constructor(
    private docenteService: DocenteService,
    private materiaService: MateriaService,
    public dialogRef: MatDialogRef<AsignarMateriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    /* obtiene las materias asignadas a los docentes */
    this.docenteService.obtenerMateriasDocente(this.data.dni)
      .subscribe(
        (res) => {
          console.log(res);
          this.materiasDocente = res
          this.dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente);
        })
    /* obtiene todas las materias de la bd */
    this.materiaService.listarMaterias()
      .subscribe(
        (res: Materia[]) => {
          this.materias = res;
          this.dataSourceMaterias = new MatTableDataSource(this.materias);
        }
      )
  }

  /* filtro de la tabla materias */
  applyFilter(filterValue: string) {
    this.dataSourceMaterias.filter = filterValue.trim().toLowerCase();
  }

  /* agrega materias a la lista de materias vinculadas */
  add(materia) {

    const _mat = this.materiasDocente.filter(
      x => x.codigo === materia.codigo
    );
    if (_mat.length === 0) {
      this.materiasDocente.push(materia);
      this.dataSourceMateriasVinculadas = new MatTableDataSource(this.materiasDocente);
    } else {
      this.docenteService.openSnackBar('la materia ya esta en la lista', 'ok');
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarCambios() {
    /* desvincula todas las materias */
    this.docenteService.desvincularTodasMaterias(this.data.dni)
      .subscribe(
        res => {
          console.log(res)
          this.materiasDocente.forEach(element => {
            let dat = new MateriaDocente(element.idMateria, this.data.dni);
            this.docenteService.asignarMateria(dat)
              .subscribe(
                res => console.log(res)
              )
          })
          this.docenteService.openSnackBar("Cambios Guardados","ok");
          this.dialogRef.close();
        }),null,
        ()=>{
        }

  }

}
