import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/servicios/reportes/reportes.service';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-reporte-cuotas',
  templateUrl: './reporte-cuotas.component.html',
  styleUrls: ['./reporte-cuotas.component.css']
})
export class ReporteCuotasComponent implements OnInit {

  constructor(private reportesService: ReportesService) {
    this.reporte = reportesService.reporte
    this.cuotas = reportesService.cuotas
  }

  cuotas = [];
  reporte;

  ngOnInit() {

    console.log(this.reporte, this.cuotas)
  }

  exportarCSV() {
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: `Reporte de Saldos deudores desde ${this.reporte.fechaI} hasta ${this.reporte.fechaF}`,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };

    const csvExporter = new ExportToCsv(options);

    this.cuotas.push({total: this.reporte.total})

    csvExporter.generateCsv(this.cuotas);

  }
}