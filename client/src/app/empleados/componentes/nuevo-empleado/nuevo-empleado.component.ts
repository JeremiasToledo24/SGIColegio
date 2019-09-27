import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';

// Clase tipos
class Tipos {
  nombre: string;
}

@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css'],
  providers: [EmpleadoService]
})
export class NuevoEmpleadoComponent implements OnInit {

  // ???
  isLinear = true;
  startDate = new Date(1990, 0, 1);
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  // Datos del empleado
  nombre: string;
  apellido: string;
  dni: number;
  sexo: string;
  cuil: string;
  direccion: string;
  telefono: string;
  fechaNacimiento: string;
  fechaIngColegio: string;

  // Tipo de empleado
  tipoEmpleado: Tipos[] = [
    { nombre: 'Administración' },
    { nombre: 'Docente' },
    { nombre: 'Ordenanza' },
    { nombre: 'Cocina' }
  ]

  // Tipo de formación académica
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

  // JSON
  localidades: string[];
  municipios: string[];
  departamentos: string[];
  provincias: string[];

  constructor(
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private empleadoService: EmpleadoService
  ) { }

  ngOnInit() {

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

    // Obtener la fecha actual para el registro del empleado
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    this.fechaIngColegio = yyyy + '-' + mm + '-' + dd;

    // Inicializar formularios
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      dni: ['', Validators.required],
      cuil: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      fechaIngColegio: ['', Validators.required],
      correo: ['', Validators.required],
      password: [null],
      tipoEmpleado: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      annio: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      fechaDesde: [null],
      fechaHasta: [null],
      descripcionExp: [null]
    });
  }

  // Agregar nuevo empleado
  addEmpleado(empleadoForm: NgForm, formacionForm: NgForm, experienciasForm: NgForm) {

    // Generar contraseña
    empleadoForm.value.password = empleadoForm.value.nombre.charAt(0).toLowerCase() + empleadoForm.value.apellido.toLowerCase().split(' ')[0] + empleadoForm.value.dni.toString().slice(-3)

    try {
      this.empleadoService.addEmpleado(empleadoForm.value)
        .subscribe(
          res => {

            // Agregar formación académica del empleado
            this.empleadoService.addFormacionEmpleado({
              'tipo': formacionForm.value.tipo,
              'descripcion': formacionForm.value.descripcion,
              'año': formacionForm.value.annio,
              'DNIEmpleado': empleadoForm.value.dni,
              'fechaDesde': experienciasForm.value.fechaDesde,
              'fechaHasta': experienciasForm.value.fechaHasta,
              'descripcionExp': experienciasForm.value.descripcionExp
            }).subscribe(
              res => {
                console.log(res)
              }
            )

            // Limpiar formulario
            this.resetForm(empleadoForm);
          }
          , error => {
            this.openSnackBar(
              'El empleado ya existe en la Base de Datos',
              'OK'
            );
          }, () => {
            this.openSnackBar(
              'Empleado registrado',
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
