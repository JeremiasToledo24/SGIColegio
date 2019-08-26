import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {DocenteService} from '../../../servicios/docentes/docente.service';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-nuevo-docente',
  templateUrl: './nuevo-docente.component.html',
  styleUrls: ['./nuevo-docente.component.css'],
  providers: [DocenteService]
})
export class NuevoDocenteComponent implements OnInit {

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
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit() {
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

  addDocente(form: NgForm) {
    try {
      if (form.value.nombre === undefined
        || form.value.apellido === undefined
        || form.value.sexo === undefined
        || form.value.dni === undefined
        || form.value.cuil === undefined
        || form.value.fechaNacimiento === undefined
        || form.value.telefono === undefined
        || form.value.direccion === undefined
        || form.value.fechaIngDocencia === undefined) {
        this.openSnackBar(
          'Llene todos los campos.',
          'OK'
        );
      } else {
        this.docenteService.agregarDocente(form.value)
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
          );
        console.log(form.value);
      }
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
