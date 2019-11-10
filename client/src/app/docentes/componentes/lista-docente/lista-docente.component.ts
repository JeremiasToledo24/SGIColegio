import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';
import { Empleado } from 'src/app/empleados/componentes/lista-empleados/lista-empleados.component';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';

class Docente {
  DNIDocente;
  apellidoDocente;
  nombreDocente
}

@Component({
  selector: 'app-lista-docente',
  templateUrl: './lista-docente.component.html',
  styleUrls: ['./lista-docente.component.css']
})
export class ListaDocenteComponent implements OnInit {

  displayedColumns: string[] = ['dni', 'apellido', 'nombre', 'operaciones'];
  dataSource;
  docente = new Docente;

  constructor(public dialogRef: MatDialogRef<ListaDocenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private empleadoService: EmpleadoService,
    private docenteService: DocenteService,
  ) { }
  ngOnInit() {
    this.empleadoService.getEmpleados().subscribe(
      res => {
        let data: Empleado[];
        data = res as Empleado[];
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  asignar(empleado) {
    if (this.data.operacion === 'A') {
      const md = {
        DNIDocente: empleado.dni,
        idPeriodo: this.data.idPeriodo,
        curso: this.data.curso,
        division: this.data.seccion,
        nivel: this.data.nivel,
        idPlanMateria: this.data.idPlanMateria
      }
      this.docenteService.registrarMateriaDocente(md)
        .subscribe(
          res => {
            console.log('res :', res);
            this.dialogRef.close();
            this.docenteService.openSnackBar('Docente vinculado', 'ok')
          }
        )

    } else {

    }

    /* this.docenteService.registrarMateriaDocente(md)
      .subscribe(
        res => {
          console.log('res :', res);
          this.dialogRef.close();
          this.docenteService.openSnackBar('Docente vinculado','ok')
        }
      ) */

  }

}
