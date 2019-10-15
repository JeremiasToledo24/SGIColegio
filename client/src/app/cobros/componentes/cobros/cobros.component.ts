import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogConfigComponent } from '../dialog-config/dialog-config.component';

@Component({
  selector: 'app-cobros',
  templateUrl: './cobros.component.html',
  styleUrls: ['./cobros.component.css']
})
export class CobrosComponent implements OnInit {

  dniControl = new FormControl('')
  alumno = '';

  // Periodos
  periodos = [
    { anio: 2020 },
    { anio: 2021 },
    { anio: 2022 },
    { anio: 2023 },
    { anio: 2024 },
    { anio: 2025 },
    { anio: 2026 },
    { anio: 2027 },
    { anio: 2028 },
    { anio: 2029 },
    { anio: 2030 },
  ];

  constructor(
    private alumnoService: AlumnoService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  buscarAlumno(event: any) {
    if (event.code === 'Enter') {
      this.alumnoService.getAlumnoDNI(this.dniControl.value)
        .subscribe(
          res => {
            this.alumno = res;
            console.log('res :', res);
          }
        )
    }
  }

  // Abrir dialog para definir montos y vencimientos
  openConfigDialog(Factura: any): void {
    const dialogRef = this.dialog.open(DialogConfigComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Config result: ${result}`);
      if (result) {
        console.log(result)
      }
    });
  }

}
