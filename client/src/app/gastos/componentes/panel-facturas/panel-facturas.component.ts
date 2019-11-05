import { Component, OnInit } from '@angular/core';
import { MatDialog, MatTab, MatTableDataSource } from '@angular/material';
import { NuevaFacturaComponent } from '../nueva-factura/nueva-factura.component';
import { Router } from '@angular/router';
import { FacturaService } from 'src/app/servicios/factura/factura.service';

@Component({
  selector: 'app-panel-facturas',
  templateUrl: './panel-facturas.component.html',
  styleUrls: ['./panel-facturas.component.css']
})
export class PanelFacturasComponent implements OnInit {

  data: [] = [];
  dataSource;

  constructor(public dialog: MatDialog,
    private router: Router,
    private facturaService: FacturaService) { }



  ngOnInit() {
    this.facturaService.listarFacturas()
    .subscribe(
      res =>{
        this.data = res as [];
        console.log(this.data)
        this.dataSource = new MatTableDataSource(this.data)
      }
    )

  }

  registrarFactura(): void {
    this.router.navigate(['/registrarFactura']);
  }

}
