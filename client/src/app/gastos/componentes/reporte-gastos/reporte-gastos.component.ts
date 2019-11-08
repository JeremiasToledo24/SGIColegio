import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/servicios/reportes/reportes.service';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-reporte-gastos',
  templateUrl: './reporte-gastos.component.html',
  styleUrls: ['./reporte-gastos.component.css']
})
export class ReporteGastosComponent implements OnInit {

  constructor(private reportesService: ReportesService) {
    this.reporte = reportesService.reporte
    this.pagos = reportesService.pagos}

    pagos;
  reporte;
  ngOnInit() {
    console.log(this.reporte,
      this.pagos)
  }

  exportarCSV(){
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: `Reporte de gastos desde ${this.reporte.fechaI} hasta ${this.reporte.fechaF}`,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(this.pagos);

  }

}
