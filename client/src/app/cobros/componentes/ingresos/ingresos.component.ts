import { Component, OnInit } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { CobrosService } from 'src/app/servicios/cobros/cobros.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  //today: number = Date.now();

  fechaInicio = new FormControl('', Validators.required)
  fechaFin = new FormControl('', Validators.required)


  displayedColumns: string[] = ['mes', 'importe', 'fecha'];
  dataSource;
  constructor(private cobrosService: CobrosService) { }

  ngOnInit() {
    this.cobrosService.obtenerDetallesCobros()
      .subscribe(
        res => {
          this.dataSource = res;
        }
      )
  }

  obtenerDetalles() {
    this.cobrosService.obtenerDetallesCobrosEntreFechas(this.fechaInicio.value, this.fechaFin.value)
    .subscribe(
      res =>{
        this.dataSource = res;
      }
    )
  }

}
