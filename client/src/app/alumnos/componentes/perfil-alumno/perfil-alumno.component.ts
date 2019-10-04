import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { CursoService } from 'src/app/servicios/cursos/curso.service';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.css']
})
export class PerfilAlumnoComponent implements OnInit {

  constructor(
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  // Variable idCurso al que pertenece
  CursoID: number = null;

  // Datos tablas
  displayedColumns: string[] = ['label', 'data'];
  datosAlumno = [];
  datosCurso = [];
  datosTutor = [];
  datosFicha = [];

  // Tablas dentro de ficha
  datosFichaEmergencia = [];
  datosFichaObra = [];
  datosFichaAlergia = [];
  datosFichaMedico = [];
  datosFichaMedicacion = [];

  // Inicializar variable que captura DNIAlumno de la barra de navegación
  public id: string;

  ngOnInit() {

    // Obtener DNIAlumno desde la barra de navegación
    this.id = this.route.snapshot.paramMap.get('id')

    // Obtener alumno por DNI
    this.alumnoService.getAlumnoDNI(this.id)
      .subscribe(
        res => {
          this.datosAlumno = [];
          this.datosAlumno.push({ label: 'DNI', data: res.DNIAlumno });
          this.datosAlumno.push({ label: 'CUIL', data: res.cuil });
          this.datosAlumno.push({ label: 'Apellido', data: res.apellido + ', ' + res.nombre });
          switch (res.sexo) {
            case 'M':
              this.datosAlumno.push({ label: 'Sexo', data: 'Masculino' })
              break;
            case 'F':
              this.datosAlumno.push({ label: 'Sexo', data: 'Femenino' })
              break;
            case 'O':
              this.datosAlumno.push({ label: 'Sexo', data: 'Otro' })
              break;
            default:
              break;
          };
          this.datosAlumno.push({ label: 'Fecha de nacimiento', data: res.fechaNacimiento });
          this.datosAlumno.push({ label: 'Domicilio', data: res.domicilio });

          // Telefono
          if (res.telefono === null || res.telefono === '') {
            this.datosAlumno.push({ label: 'Telefono', data: 'No disponible.' });
          } else {
            this.datosAlumno.push({ label: 'Telefono', data: res.telefono });
          }

          // Correo electrónico
          if (res.email === null) {
            this.datosAlumno.push({ label: 'Correo electrónico', data: 'No disponible.' });
          } else {
            this.datosAlumno.push({ label: 'Correo electrónico', data: res.email });
          }

          // Obtener curso al que pertenece el alumno
          this.alumnoService.getAlumnoCurso(this.id).subscribe(
            res => {
              if (res[0] === undefined) {
                this.datosCurso = [];
                this.datosCurso.push({ label: 'Curso', data: 'No asignado'});
              } else {
                this.CursoID = res[0].idCurso;
                this.cursoService.obtenerCurso(this.CursoID).subscribe(
                  res => {
                    this.datosCurso = [];
                    switch (res.idNivel) {
                      case 1:
                        this.datosCurso.push({ label: 'Division', data: 'Primaria' });
                        break;

                      case 2:
                        this.datosCurso.push({ label: 'Division', data: 'Secundaria' });
                        break;
                    }
                    this.datosCurso.push({ label: 'Curso', data: res.nombre });
                    this.datosCurso.push({ label: 'Division', data: res.division });
                  }
                );
              }
            },
          );

          // Colocar los datos del curso al que pertenece el alumno


          // Obtener tutor del alumno
          this.alumnoService.getTutor(this.id)
            .subscribe(
              res => {
                this.datosTutor = [];
                this.datosTutor.push({ label: 'DNI', data: res[0].DNITutor });
                this.datosTutor.push({ label: 'CUIL', data: res[0].cuil });
                this.datosTutor.push({ label: 'Apellido y nombre', data: res[0].apellido + ', ' + res[0].nombre });
                switch (res[0].sexo) {
                  case 'M':
                    this.datosTutor.push({ label: 'Sexo', data: 'Masculino' })
                    break;
                  case 'F':
                    this.datosTutor.push({ label: 'Sexo', data: 'Femenino' })
                    break;
                  case 'O':
                    this.datosTutor.push({ label: 'Sexo', data: 'Otro' })
                    break;
                  default:
                    break;
                };
                this.datosTutor.push({ label: 'Parentezco', data: res[0].parentezco });
                this.datosTutor.push({ label: 'Fecha de nacimiento', data: res[0].fechaNacimiento });
                this.datosTutor.push({ label: 'Domicilio', data: res[0].domicilio });
                this.datosTutor.push({ label: 'Telefono personal', data: res[0].telefonoPersonal });

                // Telefono de trabajo
                if (res.telefonoTrabajo === undefined) {
                  this.datosTutor.push({ label: 'Telefono de trabajo', data: 'No disponible.' });
                } else {
                  this.datosTutor.push({ label: 'Telefono de trabajo', data: res[0].telefonoTrabajo });
                }
              }
            );

          // Obtener ficha médica del alumno
          this.alumnoService.getFichaMedica(this.id)
            .subscribe(
              res => {
                this.datosFicha = [];

                // Contacto de emergencia
                this.datosFichaEmergencia = []
                this.datosFichaEmergencia.push({ label: 'Nombre y apellido', data: res[0].emergenciaNom });
                this.datosFichaEmergencia.push({ label: 'Teléfono', data: res[0].emergenciaTel });
                this.datosFichaEmergencia.push({ label: 'Vinculo con el alumno', data: res[0].emergenciaVinculo });

                // Obra social
                this.datosFichaObra = [];
                this.datosFichaObra.push({ label: 'Tiene obra social', data: res[0].tieneObraSocial });
                if (res[0].tieneObraSocial === 'Si') {
                  this.datosFichaObra.push({ label: 'Obra social', data: res[0].obraSocialNom });
                  this.datosFichaObra.push({ label: 'N° de afiliado', data: res[0].obraSocialNroAfil });
                }

                // Alergias
                this.datosFichaAlergia = [];
                this.datosFichaAlergia.push({ label: 'Tiene alergias', data: res[0].tieneAlergia });
                if (res[0].tieneAlergia === 'Si') {
                  this.datosFichaAlergia.push({ label: 'Medicina para alergia', data: res[0].alergiaMed });
                  this.datosFichaAlergia.push({ label: 'Detalle de alergia', data: res[0].alergiaDetalle });
                }

                // Médico de cabecera
                this.datosFichaMedico = [];
                this.datosFichaMedico.push({ label: 'Tiene médico de cabecera', data: res[0].tieneMedicoCab });
                if (res[0].tieneMedicoCab === 'Si') {
                  this.datosFichaMedico.push({ label: 'Apellido y nombre', data: res[0].medicoCabNom });
                  this.datosFichaMedico.push({ label: 'Teléfono', data: res[0].medicoCabTel });
                }

                // Medicación habitual
                this.datosFichaMedicacion = [];
                this.datosFichaMedicacion.push({ label: 'Toma medicación habitual', data: res[0].tieneMedHab });
                if (res[0].tieneMedHab === 'Si') {
                  this.datosFichaMedicacion.push({ label: 'Nombre de medicación', data: res[0].medHabNom });
                  this.datosFichaMedicacion.push({ label: 'Nombre de medicación', data: res[0].medHabDosis });
                }
              }
            );

        }
      ),
      error => {
        this.openSnackBar('Hubo un error. Intente más tarde.', 'OK');
      }
  }

  // Redirigir a lista
  volver() {
    this.router.navigate(['/listaAlumnos']);
  }

  // Redirigir a asignar
  irAsignar() {
    this.router.navigate(['/asignarAlumno']);
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