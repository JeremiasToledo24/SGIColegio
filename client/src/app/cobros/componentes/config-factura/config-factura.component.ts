import { Component, OnInit } from '@angular/core';
import { DialogConfigComponent } from '../dialog-config/dialog-config.component';
import { MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';

@Component({
  selector: 'app-config-factura',
  templateUrl: './config-factura.component.html',
  styleUrls: ['./config-factura.component.css']
})
export class ConfigFacturaComponent implements OnInit {

  nivelControl = new FormControl('', Validators.required)
  constructor(
    private dialog: MatDialog,
    private alumnoService: AlumnoService
  ) { }

  dataSource = [
    { concepto: 'Matricula' },
    { concepto: 'Cuota' }
  ];

  ngOnInit() {
  }

  isValid(Factura: any) {
    if (this.nivelControl.valid) {
      this.openConfigDialog(Factura)
    }else{
      this.alumnoService.openSnackBar('Seleccione un nivel', 'ok')
    }


  }


  // Abrir dialog para definir montos y vencimientos
  openConfigDialog(Factura: any): void {

    const dialogRef = this.dialog.open(DialogConfigComponent, {
      data: { Factura: Factura.concepto as string, nivel: this.nivelControl.value }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Config result: ${result}`);
      if (result) {
        console.log(result)
      }
    });
  }

}
