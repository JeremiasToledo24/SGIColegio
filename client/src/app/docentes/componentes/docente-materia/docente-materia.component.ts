import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';
import { MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { MateriaModel } from 'src/app/models/materia-model';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsignarMateriaComponent } from './asignar-materia/asignar-materia.component';
/* INTERFACES: */
export interface Docente {
  dni;
  nombre;
  apellido;
}

/* COMPONENTE */
@Component({
  selector: 'app-docente-materia',
  templateUrl: './docente-materia.component.html',
  styleUrls: ['./docente-materia.component.css']
})
/* Clase componente */
export class DocenteMateriaComponent implements OnInit {
  /* displayedColumnsD: string[] = ['label', 'data'];
  buscadorForm = new FormGroup({
    data: new FormControl('', Validators.required)
  });
  displayedColumns: string[] = ['dni', 'apellido', 'nombre', 'operaciones'];
  displayedColumnsM: string[] = ['codigo', 'nombre', 'operaciones'];
  @Input() dataSource: any[];
  dataSourceDocente: any[]; */

  constructor(private docenteService: DocenteService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private materiaService: MateriaService,
  ) { }
  docenteData: Docente[] = [];
  displayedColumns: string[] = ['dni', 'nombre', 'apellido', 'operaciones'];
  dataSource = new MatTableDataSource(this.docenteData);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnInit() {
    /*  this.materiaService.listarMaterias().subscribe(
       res => {
         this.materiaService.datasource = res as MateriaModel[];
       }
     );*/
    this.docenteService.listarDocentes().subscribe(
      (res: Docente[]) => {
        res.forEach(element => {
          this.dataSource.data.push({ dni: element.dni, nombre: element.nombre, apellido: element.apellido })
          this.dataSource = new MatTableDataSource(this.docenteData);

        });
      }
    );

  }
  openDialog(docente): void {
    const dialogRef = this.dialog.open(AsignarMateriaComponent, {
      height: '800px',
      width: '800px',
      data: {
        dni: docente.dni,
        nombre: docente.nombre,
        apellido: docente.apellido
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

  /* seleccionarDocente(docente) {
    this.dataSourceDocente = [];
    this.dataSourceDocente.push({ label: 'DNI', data: docente.dni })
    this.dataSourceDocente.push({ label: 'Nombre y Apellido', data: docente.nombre + ' ' + docente.apellido });
    console.log(this.dataSourceDocente)
  } */



  /* limpiar() {
    this.buscadorForm.reset();
    this.docenteService.listarDocentes().subscribe(
      res => {
        this.dataSource = res as any[];
      }
    );
  } */

  /* buscar() {
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
                      () => { }
                    )
                }
                ,
                () => { }
              )
          },
          () => { }
        )
    } else {
      this.snackBar.open('Debe ingresar un DNI, Nombre o Apellido del Docente que desea buscar', 'OK')
    }

  }
 */
}
