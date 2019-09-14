import {Component, OnInit} from '@angular/core';
import {NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import {DocenteService} from '../../../servicios/docentes/docente.service';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import { AutenticacionService } from 'src/app/servicios/autenticacion/autenticacion.service';

class Tipos {
  nombre: string;
}

@Component({
  selector: 'app-nuevo-docente',
  templateUrl: './nuevo-docente.component.html',
  styleUrls: ['./nuevo-docente.component.css'],
  providers: [DocenteService, AutenticacionService]
})
export class NuevoDocenteComponent implements OnInit {
  isLinear = true;
  startDate = new Date(1990, 0, 1);
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  /* array de tipos de formacion. se muestra en el mat-select */
  tipos: Tipos[] = [
    {nombre: 'Título Secundario'},
    {nombre: 'Título Terciario'},
    {nombre: 'Título Universitario'},
    {nombre: 'Maestria'},
    {nombre: 'Doctorado'},
    {nombre: 'Certificacion'},
    {nombre: 'Curso'},
    {nombre: 'Capacitacion'}
  ];


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

  // Usuario del docente
  usuario: number;
  contraseña: string;
  correo: string;
  tipo: string = 'Docente';

  constructor(
    private docenteService: DocenteService,
    private authService: AutenticacionService,
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder
  ) {
  }
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      dni: ['', Validators.required],
      cuil: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaIngDocencia: ['', Validators.required],
      fechaIngColegio: ['', Validators.required],
      correo: ['',Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      annio: ['', Validators.required]
    });
    
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


    // Obtener la fecha actual para el registro del docente
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    this.fechaIngColegio = yyyy + '-' + mm + '-' + dd;
  }

  // Agregar nuevo docente
  addDocente(docenteForm: NgForm, formacionForm: NgForm) {
    try {
      this.docenteService.agregarDocente(docenteForm.value)
        .subscribe(
          res => {
            
            // Agregar formación docente
            this.docenteService.agregarFormacionDocente({
              'tipo': formacionForm.value.tipo,
              'descripcion': formacionForm.value.descripcion,
              'annio': formacionForm.value.annio,
              'DNIDocente': docenteForm.value.dni
            }).subscribe(
              res => {
                console.log(res)
              }
            )

            // Agregar usuario y contraseña
            this.authService.nuevoUsuario(
              {
                'nombre': docenteForm.value.dni,
                'contraseña': docenteForm.value.nombre.charAt(0).toLowerCase() + docenteForm.value.apellido.toLowerCase().split(' ')[0] + docenteForm.value.dni.toString().slice(-3),
                'correo': docenteForm.value.correo,
                'tipo': this.tipo
              }
            ).subscribe(
              res => {
                console.log(res)
              }
            )
            
            // Limpiar formulario
            this.resetForm(docenteForm);
          }
          , error => {
            this.openSnackBar(
              'El docente ya existe en la Base de Datos',
              'OK'
            );
          }, () => {
            this.openSnackBar(
              'Docente registrado',
              'OK'
            );
          });
    } catch (err) {
    }
  }

  // Mostrar SnackBar
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
        duration: 4000
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
