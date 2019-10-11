import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';
import { Empleado } from 'src/app/empleados/componentes/lista-empleados/lista-empleados.component';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';

@Component({
  selector: 'app-lista-docente',
  templateUrl: './lista-docente.component.html',
  styleUrls: ['./lista-docente.component.css']
})
export class ListaDocenteComponent implements OnInit {

  displayedColumns: string[] = ['dni', 'apellido', 'nombre','operaciones'];
  dataSource;

  constructor(public dialogRef: MatDialogRef<ListaDocenteComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private empleadoService: EmpleadoService,
    private docenteService: DocenteService,


    ) { }



  ngOnInit() {
    console.log('this.data :', this.data);
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

  asignar(empleado){
    const md = {curso: this.data.curso, seccion: this.data.seccion, DNIDocente: empleado.dni, idMateria: this.data.materia.codMateria}
    console.log('md :', md);
    this.docenteService.registrarMateriaDocente(md)
    .subscribe(
      res => {
        this.dialogRef.close()
      }
    )

  }

}
