import {Component, OnInit, Input, Output} from '@angular/core';
import {DocenteService} from 'src/app/servicios/docentes/docente.service';
import {ConfirmDialogComponent} from 'src/app/componentes/confirm-dialog/confirm-dialog.component';
import {FormacionComponent} from '../formacion/formacion.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {EditarDocenteComponent} from '../editar-docente/editar-docente.component';
import {EventEmitter} from 'events';


@Component({
  selector: 'app-lista-docente',
  templateUrl: './lista-docente.component.html',
  styleUrls: ['./lista-docente.component.css']
})
export class ListaDocenteComponent implements OnInit {

  buscadorForm = new FormGroup({
    data: new FormControl('', Validators.required)
  });

  constructor(
    private docenteService: DocenteService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
  }

  displayedColumns: string[] = ['dni', 'apellido', 'nombre', 'operaciones'];
  @Input() dataSource: any[];

  ngOnInit() {
    this.docenteService.listarDocentes().subscribe(
      res => {
        this.dataSource = res as any[];
      }
    );
  }


  limpiar() {
    this.buscadorForm.reset();
    this.docenteService.listarDocentes().subscribe(
      res => {
        this.dataSource = res as any[];
      }
    );
  }

  buscar() {
    if (this.buscadorForm.valid) {
      this.docenteService.obtenerDocentesDNI(this.buscadorForm.value.data)
        .subscribe(
          res => {
            this.dataSource = [];
            this.dataSource.push(res)
          },
          error => {
            this.docenteService.obtenerDocentesNombre(this.buscadorForm.value.data)
              .subscribe(
                res => {
                  this.dataSource = [];
                  res.forEach(element => {
                    this.dataSource.push(element)
                  });
                },
                error => {
                  this.docenteService.obtenerDocentesApellido(this.buscadorForm.value.data)
                    .subscribe(
                      res => {
                        this.dataSource = [];
                        res.forEach(element => {
                          this.dataSource.push(element)
                        });
                      },
                      error => {
                        this.snackBar.open(`El Docente ${this.buscadorForm.value.data} no se encuentra registrado en el sistema`, "ok")
                      },
                      () => {
                      }
                    )
                }
                ,
                () => {
                }
              )
          },
          () => {
          }
        )
    } else {
      this.snackBar.open('Debe ingresar un DNI, Nombre o Apellido del Docente que desea buscar', 'OK')
    }

  }

  /* metodo que redirige a la pagina del perfil del docente */
  verPerfil(dni) {
    this.router.navigate(['/perfilDocente', dni]);
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


  // Dialogo para editar docente
  openEditDialog(Docente: any): void {
    const dialogRef = this.dialog.open(EditarDocenteComponent, {
      data: {
        nombre: Docente.nombre,
        apellido: Docente.apellido,
        sexo: Docente.sexo,
        dni: Docente.dni,
        cuil: Docente.cuil,
        fechaNacimiento: Docente.fechaNacimiento,
        telefono: Docente.telefono,
        direccion: Docente.direccion,
        fechaIngDocencia: Docente.fechaIngDocencia,
        fechaIngColegio: Docente.fechaIngColegio
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
    });
  }

  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
        duration: 4000
      }
    );
  }

}
