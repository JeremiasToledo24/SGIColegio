import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DocenteService } from '../../../servicios/docentes/docente.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

class Tipos {
  nombre: string;
}

@Component({
  selector: 'app-nuevo-docente',
  templateUrl: './nuevo-docente.component.html',
  styleUrls: ['./nuevo-docente.component.css'],
  providers: [DocenteService]
})
export class NuevoDocenteComponent implements OnInit {
  isLinear = true;
  startDate = new Date(1990, 0, 1);
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  /* array de tipos de formacion. se muestra en el mat-select */
  tipos: Tipos[] = [
    { nombre: 'Título Secundario' },
    { nombre: 'Título Terciario' },
    { nombre: 'Título Universitario' },
    { nombre: 'Maestria' },
    { nombre: 'Doctorado' },
    { nombre: 'Certificacion' },
    { nombre: 'Curso' },
    { nombre: 'Capacitacion' }
  ];
  selectedTipos;

  // JSON
  localidades: string[];
  municipios: string[];
  departamentos: string[];
  provincias: string[];

  // Datos del docente
  nombre: string;
  apellido: string;
  dni: number;
  sexo: string;
  cuil: string;
  direccion: string;
  telefono: string;
  fechaNacimiento: string;
  fechaIngDocencia: string;
  fechaIngColegio: string;

  constructor(
    private docenteService: DocenteService,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombreCtrl: ['', Validators.required],
      apellidoCtrl: ['', Validators.required],
      sexoCtrl: ['', Validators.required],
      dniCtrl: ['', Validators.required],
      cuilCtrl: ['', Validators.required],
      nacimientoCtrl: ['', Validators.required],
      telefonoCtrl: ['', Validators.required],
      direccionCtrl: ['', Validators.required],
      fechaIngDocCtrl: ['', Validators.required],
      fechaIngColCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      tipoCtrl: ['', Validators.required],
      descCtrl: ['', Validators.required],
      fechaFormacionCtrl: ['', Validators.required]
    });
    // TODO Elegir provincia/dpto/.. y nueva tabla Docente.
    /* // Cargar PROVINCIAS desde JSON
    this.http.get('../../../../../assets/json/provincias.json').subscribe(
      data => {
        this.provincias = data as string[];
      }
    );

    // Cargar DEPARTAMENTOS desde JSON
    this.http.get('../../../../../assets/json/departamentos.json').subscribe(
      data => {
        this.departamentos = data as string[];
      }
    );

    // Cargar MUNICIPIOS desde JSON
    this.http.get('../../../../../assets/json/municipios.json').subscribe(
      data => {
        this.municipios = data as string[];
      }
    );

    // Cargar LOCALIDADES desde JSON
    this.http.get('../../../../../assets/json/localidades-censales.json').subscribe(
      data => {
        this.localidades = data as string[];
      }
    ); */
    //
    // Obtener la fecha actual para el registro del docente
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    this.fechaIngColegio = yyyy + '-' + mm + '-' + dd;
  }

  addDocente(docenteForm: NgForm, formacionForm: NgForm) {
    try {
     /*  this.docenteService.agregarDocente(form.value)
        .subscribe(
          res => {
            if (res === undefined) {
              this.openSnackBar(
                'Docente existente',
                'OK'
              );
            } else {
              this.openSnackBar(
                'Docente registrado',
                'OK'
              );
              this.resetForm(form);
            }
          }
        ); */
      console.log(docenteForm.value,'docente');
      console.log(formacionForm.value,'formacion');
    } catch (err) {
    }
  }

  // Mostrar SnackBar
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
        duration: 2000
      }
    );
  }

  // Reiniciar el formulario
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }
}