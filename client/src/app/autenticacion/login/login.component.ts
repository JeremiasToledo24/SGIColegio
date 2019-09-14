import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AutenticacionService } from 'src/app/servicios/autenticacion/autenticacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  firstFormGroup: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private autenticacionService: AutenticacionService
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      contraseña: ['', Validators.required]
    })
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
