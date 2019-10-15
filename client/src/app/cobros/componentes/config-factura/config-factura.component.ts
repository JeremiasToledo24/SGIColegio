import { Component, OnInit } from '@angular/core';
import { DialogConfigComponent } from '../dialog-config/dialog-config.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-config-factura',
  templateUrl: './config-factura.component.html',
  styleUrls: ['./config-factura.component.css']
})
export class ConfigFacturaComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

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
