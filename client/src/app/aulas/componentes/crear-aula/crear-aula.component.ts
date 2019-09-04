import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {AulaService} from 'src/app/servicios/aula/aula.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-crear-aula',
  templateUrl: './crear-aula.component.html',
  styleUrls: ['./crear-aula.component.css']
})
export class CrearAulaComponent implements OnInit {

  aulaFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CrearAulaComponent>,
    private aulaService: AulaService,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.aulaFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      capacidad: ['', Validators.required],
      disponibilidad: ['', Validators.required]
    })
  }

  // Agregar materia
  addAula(Aula: NgForm) {
    try {
      this.aulaService.addAula(Aula.value)
        .subscribe(
          res => {
            this.snackBar.open('Aula agregada con éxito', 'OK');
            this.dialogRef.close(true);
            console.log(res);
          }, error => {
            this.openSnackBar('No se pudo agregar el aula.', 'OK');
            console.log(error);
          });
    } catch (err) {
    }
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
