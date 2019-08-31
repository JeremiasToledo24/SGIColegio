import { Component, OnInit, Input } from '@angular/core';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';
import { ConfirmDialogComponent } from 'src/app/componentes/confirm-dialog/confirm-dialog.component';
import { FormacionComponent } from '../formacion/formacion.component';
import { MatDialog } from '@angular/material/dialog';
import { EditarDocenteComponent } from '../editar-docente/editar-docente.component';
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

  displayedColumns: string[] = ['dni', 'apellido', 'nombre', 'cuil', 'operaciones'];
  @Input() dataSource: any[];

  ngOnInit() {
    this.docenteService.listarDocentes().subscribe(
      res => {
        this.dataSource = res as any[];
      }
    );
  }

  // Editar docente
  editarMateria(Docente: any) {
    this.openEditDialog(Docente);
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

  // Dialogo para confirmar borrar docente
  dialogo(Docente: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        nombre: Docente.nombre,
        apellido: Docente.apellido,
        dni: Docente.dni
      }
    });
    console.log('hola');
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

  // Dialogo para editar la información del docente
  openEditDialog(Docente: any): void {
    const dialogRef = this.dialog.open(EditarDocenteComponent, {
      data: {
        nombre: Docente.nombre,
        apellido: Docente.apellido,
        dni: Docente.dni,
        cuil: Docente.dni,
        fechaNacimiento: Docente.fechaNacimiento,
        sexo: Docente.sexo,
        telefono: Docente.telefono,
        direccion: Docente.direccion,
        fechaIngDocencia: Docente.fechaIngDocencia,
        fechaIngColegio: Docente.fechaIngColegio
      }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        console.log(`Editar result: ${res}`);
        if (res) {
          this.docenteService.listarDocentes().subscribe(
            result => {
              this.dataSource = result as any[];
            }
          )
        }
      }
    )
  }

}
