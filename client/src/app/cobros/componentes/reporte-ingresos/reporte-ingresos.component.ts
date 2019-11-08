import { Component, OnInit, Inject, Input } from '@angular/core';
import { ReportesService } from 'src/app/servicios/reportes/reportes.service';
import { ExportToCsv } from 'export-to-csv';


@Component({
  selector: 'app-reporte-ingresos',
  templateUrl: './reporte-ingresos.component.html',
  styleUrls: ['./reporte-ingresos.component.css']
})
export class ReporteIngresosComponent implements OnInit {
  constructor(private reportesService: ReportesService) {
    this.reporte = reportesService.reporte
    this.cobros = reportesService.cobros
  }

  

  cobros;
  reporte;
  ngOnInit() {
  }

  exportarCSV(){
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: `Reporte de ingresos desde ${this.reporte.fechaI} hasta ${this.reporte.fechaF}`,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(this.cobros);

  }
}
