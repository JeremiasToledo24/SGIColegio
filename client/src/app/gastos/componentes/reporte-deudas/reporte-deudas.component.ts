import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/servicios/reportes/reportes.service';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-reporte-deudas',
  templateUrl: './reporte-deudas.component.html',
  styleUrls: ['./reporte-deudas.component.css']
})
export class ReporteDeudasComponent implements OnInit {

  constructor(private reportesService: ReportesService) {
    this.reporte = reportesService.reporte
    this.deudas = reportesService.deudas}

    deudas;
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
      title: `Reporte de deduas desde ${this.reporte.fechaI} hasta ${this.reporte.fechaF}`,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(this.deudas);

  }

}
