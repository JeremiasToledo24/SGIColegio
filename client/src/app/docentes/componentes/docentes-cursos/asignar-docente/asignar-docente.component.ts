import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatPaginator } from '@angular/material';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';


/* INTERFACES: */
export interface Docente {
  dni;
  nombre;
  apellido;
}


@Component({
  selector: 'app-asignar-docente',
  templateUrl: './asignar-docente.component.html',
  styleUrls: ['./asignar-docente.component.css']
})
export class AsignarDocenteComponent implements OnInit {

  docenteData: Docente[] = [];
  displayedColumns: string[] = ['dni', 'nombre', 'apellido', 'operaciones'];
  dataSource = new MatTableDataSource(this.docenteData);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(

    public dialogRef: MatDialogRef<AsignarDocenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private empleadoService: EmpleadoService,
    private docenteService: DocenteService

  ) { }

  ngOnInit() {
    console.log('this.data :', this.data.materia.nombreMateria);
    this.empleadoService.getEmpleadosDocentes().subscribe(
      (res: Docente[]) => {
        res.forEach(element => {
          this.dataSource.data.push({ dni: element.dni, nombre: element.nombre, apellido: element.apellido })
          this.dataSource = new MatTableDataSource(this.docenteData);
          this.dataSource.paginator = this.paginator;
        });
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  asignarDocente(dni) {
    const md = { idCurso: this.data.periodo.idCurso, DNIDocente: dni, idMateria: this.data.materia.codMateria }
    console.log('md :', md);
    this.docenteService.registrarMateriaDocente(md)
      .subscribe(
        res => {
          this.docenteService.openSnackBar('Docente Asignado', 'ok')

        }
      )
    /* this.docenteService.docenteCurso(dni,md.idMateria, md.idCurso )
      .subscribe(
        (res: []) => {
          if (res.length === 0) {
            console.log(res)
            
          }else{
            
          }
        }
      ) */

  }
}