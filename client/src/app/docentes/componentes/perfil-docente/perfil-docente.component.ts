import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.component.html',
  styleUrls: ['./perfil-docente.component.css']
})


export class PerfilDocenteComponent implements OnInit {

  public id: string;
  displayedColumns: string[] = ['label', 'data'];
  dataSource = [];

  constructor(
    private route: ActivatedRoute,
    private docenteService: DocenteService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.docenteService.obtenerDocentesDNI(this.id)
      .subscribe(
        res => {
          console.log(res);
          this.dataSource = []
          this.dataSource.push({ label: 'DNI', data: res.dni })
          this.dataSource.push({ label: 'Nombre y Apellido', data: res.nombre + ' ' + res.apellido })
          this.dataSource.push({ label: 'CUIL', data: res.cuil })
          switch (res.sexo) {
            case 'M':
              this.dataSource.push({ label: 'Sexo', data: 'Masculino' })
              break;
            case 'F':
              this.dataSource.push({ label: 'Sexo', data: 'Femenino' })
              break;
            case 'O':
              this.dataSource.push({ label: 'Sexo', data: 'Otro' })
              break;
            default:
              break;
          }
          this.dataSource.push({ label: 'Fecha de Nacimiento', data: res.fechaNacimiento })
          this.dataSource.push({ label: 'Telefono', data: res.telefono })
          this.dataSource.push({ label: 'Direccion', data: res.direccion })
          this.dataSource.push({ label: 'Fecha de Ingreso al Establecimiento', data: res.fechaIngColegio })
          this.dataSource.push({ label: 'Fecha de Ingreso a la Docencia', data: res.fechaIngDocencia })
        }
      ),
      error => {
        this.docenteService.openSnackBar("Hubo un error. Intente mas tarde", 'OK')
      }
  }

}







