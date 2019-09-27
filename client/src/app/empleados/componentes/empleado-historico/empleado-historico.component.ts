import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';

export class Empleado {
  dni;
  nombre;
  apellido;
  tipoEmpleado;
  constructor(dni, n, a, te) {
    this.dni = dni;
    this.nombre = n;
    this.apellido = a;
    this.tipoEmpleado = te;
  }
}

@Component({
  selector: 'app-empleado-historico',
  templateUrl: './empleado-historico.component.html',
  styleUrls: ['./empleado-historico.component.css']
})
export class EmpleadoHistoricoComponent implements OnInit {

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  // Datos de tabla
  displayedColumns: string[] = ['dni', 'apellido', 'nombre','tipoEmpleado','fechaEgrColegio','operaciones'];
  @Input() dataSource;

  // Paginador
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.empleadoService.getEmpleadosHistorico().subscribe(
      res => {
        let data: Empleado[];
        data = res as Empleado[];
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  // Buscador 
  buscadorForm = new FormGroup({
    data: new FormControl('', Validators.required)
  });
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Limpiar buscador
  limpiar() {
    this.buscadorForm.reset();
    this.empleadoService.getEmpleadosHistorico().subscribe(
      res => {
        this.dataSource = res as any[];
      }
    );
  }

  // Redirigir al perfil del empleado
  verPerfil(dni) {
    this.router.navigate(['/perfilEmpleado', dni]);
  }

}
