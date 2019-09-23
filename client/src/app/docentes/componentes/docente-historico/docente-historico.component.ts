import { Component, OnInit, Input } from '@angular/core';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material';
import { Docente } from '../docente-materia/asignar-materia/asignar-materia.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente-historico',
  templateUrl: './docente-historico.component.html',
  styleUrls: ['./docente-historico.component.css']
})
export class DocenteHistoricoComponent implements OnInit {

  buscadorForm = new FormGroup({
    data: new FormControl('', Validators.required)
  });

  constructor(
    private docenteService: DocenteService,
    private router: Router

  ) { }

  // Datos de tabla
  displayedColumns: string[] = ['dni', 'apellido', 'nombre','fechaEgrColegio','operaciones'];
  @Input() dataSource;

  ngOnInit() {
    this.docenteService.getDocenteHistorico().subscribe(
      res => {
        let data: Docente[];
        data = res as Docente[];
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }

  verPerfil(dni) {
    this.router.navigate(['/perfilDocente', dni]);
  }

  // Buscador 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // Limpiar buscador
  limpiar() {
    this.buscadorForm.reset();
    this.docenteService.listarDocentes().subscribe(
      res => {
        this.dataSource = res as any[];
      }
    );
  }

}
