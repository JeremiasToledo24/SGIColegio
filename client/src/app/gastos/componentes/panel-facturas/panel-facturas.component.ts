import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NuevaFacturaComponent } from '../nueva-factura/nueva-factura.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-facturas',
  templateUrl: './panel-facturas.component.html',
  styleUrls: ['./panel-facturas.component.css']
})
export class PanelFacturasComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
  }

  registrarFactura(): void {
    this.router.navigate(['/registrarFactura']);
  }

}
