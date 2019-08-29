import { Component, OnInit, Input } from '@angular/core';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';
import { ConfirmDialogComponent } from 'src/app/componentes/confirm-dialog/confirm-dialog.component';
import { FormacionComponent } from '../formacion/formacion.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-lista-docente',
  templateUrl: './lista-docente.component.html',
  styleUrls: ['./lista-docente.component.css']
})
export class ListaDocenteComponent implements OnInit {

  buscadorForm = new FormGroup({
    dni: new FormControl('')
  });

  constructor(
    private docenteService: DocenteService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  displayedColumns: string[] = ['dni', 'apellido', 'nombre', 'cuil', 'operaciones'];
  @Input() dataSource: any[];

  ngOnInit() {
    this.docenteService.listarDocentes().subscribe(
      res => {
        this.dataSource = res as any[];
      }
    );
  }

  buscar(){
    this.docenteService.obtenerDocente(this.buscadorForm.value.dni)
    .subscribe(
      res => {
        this.dataSource = [];
        this.dataSource.push(res)
      },
      error =>{
        this.snackBar.open(`El Docente con el dni ${this.buscadorForm.value.dni} no se encuentra registrado en el sistema`, "ok")
      },
      () =>{

      }
    )
  }


  // Borrar docente
  borrarDocente(Docente: any) {
    this.dialogo(Docente);
  }

  //Agregar formacion
  agregarFormacion(Docente: any) {
    this.dialogoFormacion(Docente);
  }

  //dialogo agregar formacion
  dialogoFormacion(Docente: any) {
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

  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
        duration: 4000
      }
    );
  }

}
