import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material';
import { CursoService } from 'src/app/servicios/cursos/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  firstFormGroup: FormGroup;

  public niveles = [
    {"id": 1, "nombre": "Primaria"},
    {"id": 2, "nombre": "Secundaria"}
  ]
  public divisiones = [
    {"nombre": "A"},
    {"nombre": "B"}
  ]

  constructor(
    private cursoService: CursoService,
    public dialogRef: MatDialogRef<EditarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      idCurso: ['', Validators.required],
      nombre: ['', Validators.required],
      division: ['', Validators.required],
      idNivel: ['', Validators.required]
    })
    this.firstFormGroup.setValue({
      idCurso: this.data.idCurso,
      nombre: this.data.nombre,
      division: this.data.division,
      idNivel: this.data.idNivel
    })
  }

  // Editar docente
  editCurso(Curso: FormGroup) {
    console.log(Curso.value);
    this.cursoService.editarCurso(Curso.value)
      .subscribe(
        res => {
          this.snackBar.open('Curso actualizado con éxito', 'OK');
          this.dialogRef.close(true);
          console.log(res);
        }, error => {
          this.openSnackBar('No se pudo actualizar.', 'OK');
          console.log(error);
        }
      );
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }

  // Mostrar SnackBar
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
        duration: 4000
      }
    );
  }
}
