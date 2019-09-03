import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AulaService } from 'src/app/servicios/aula/aula.service';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-aula',
  templateUrl: './editar-aula.component.html',
  styleUrls: ['./editar-aula.component.css'],
  providers: [AulaService]
})
export class EditarAulaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditarAulaComponent>,
    private aulaService: AulaService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _formBuilder: FormBuilder,
  ) { }

  firstFormGroup: FormGroup;

  ngOnInit() {
    console.log(this.data)
    this.firstFormGroup = this._formBuilder.group({
      idAula: ['',Validators.required],
      nombre: ['', Validators.required],
      capacidad: ['', Validators.required],
      disponibilidad: ['', Validators.required]
    })
    this.firstFormGroup.setValue(
      {
        idAula: this.data.idAula,
        nombre: this.data.nombre,
        capacidad: this.data.capacidad,
        disponibilidad: this.data.disponibilidad
      }
    )
  }

  // Editar docente
  editAula(Aula: FormGroup) {
    console.log(Aula.value);
    this.aulaService.editarAula(Aula.value)
    .subscribe(
      res => {
        this.snackBar.open('Aula actualizado con éxito','OK');
        this.dialogRef.close(true);
        console.log(res);
      }, error => {
        this.openSnackBar('No se pudo actualizar.','OK');
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
