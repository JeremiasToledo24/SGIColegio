import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-perfil-empleado',
  templateUrl: './perfil-empleado.component.html',
  styleUrls: ['./perfil-empleado.component.css']
})
export class PerfilEmpleadoComponent implements OnInit {

  public id: string;
  displayedColumns: string[] = ['label', 'data'];
  dataSource = [];

  constructor(
    private route: ActivatedRoute,
    private empleadoService: EmpleadoService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.empleadoService.obtenerEmpleadoDNI(this.id)
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = []
          this.dataSource.push({label: 'DNI', data: res.dni})
          this.dataSource.push({label: 'Nombre y Apellido', data: res.nombre + ' ' + res.apellido})
          this.dataSource.push({label: 'CUIL', data: res.cuil})
          switch (res.sexo) {
            case 'M':
              this.dataSource.push({label: 'Sexo', data: 'Masculino'})
              break;
            case 'F':
              this.dataSource.push({label: 'Sexo', data: 'Femenino'})
              break;
            case 'O':
              this.dataSource.push({label: 'Sexo', data: 'Otro'})
              break;
            default:
              break;
          }
          this.dataSource.push({label: 'Fecha de Nacimiento', data: res.fechaNacimiento})
          this.dataSource.push({label: 'Telefono', data: res.telefono})
          this.dataSource.push({label: 'Direccion', data: res.direccion})
          this.dataSource.push({label: 'Fecha de Ingreso al Establecimiento', data: res.fechaIngColegio})
        }
      ),
      error => {
        this.openSnackBar("Hubo un error. Intente mas tarde", 'OK')
      }
  }

  // Mostrar SnackBar
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
      duration: 4000
    }
    );
  }
}
