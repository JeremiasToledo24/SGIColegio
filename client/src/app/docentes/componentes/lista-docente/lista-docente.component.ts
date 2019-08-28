import { Component, OnInit, Input } from '@angular/core';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';
import { ConfirmDialogComponent } from 'src/app/componentes/confirm-dialog/confirm-dialog.component';
import { FormacionComponent } from '../formacion/formacion.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-lista-docente',
  templateUrl: './lista-docente.component.html',
  styleUrls: ['./lista-docente.component.css']
})
export class ListaDocenteComponent implements OnInit {

  constructor(
    private docenteService: DocenteService,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[] = ['dni','apellido','nombre','cuil','operaciones'];
  @Input() dataSource: any[];

  ngOnInit() {
    this.docenteService.listarDocentes().subscribe(
      res => {
        this.dataSource = res as any[];
      }
    );
  }

  // Borrar docente
  borrarDocente(Docente: any) {
    this.dialogo(Docente);
  }

  //Agregar formacion
  agregarFormacion(Docente: any){
    this.dialogoFormacion(Docente);
  }

  //dialogo agregar formacion
  dialogoFormacion(Docente: any){
    const dialogRef = this.dialog.open(FormacionComponent, {
      data: {
        dni: Docente.dni
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        this.docenteService.listarDocentes().subscribe(
          res => {
            this.dataSource = res as any[];
          }
        );
      }
    });
  }

  // Dialogo
  dialogo(Docente: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        nombre: Docente.nombre,
        apellido: Docente.apellido,
        dni: Docente.dni
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Eliminar result: ${result}`);
      if (result) {
        console.log(result)
        this.docenteService.listarDocentes().subscribe(
          res => {
            this.dataSource = res as any[];
          }
        );
      }
    }
    );
  }

}
