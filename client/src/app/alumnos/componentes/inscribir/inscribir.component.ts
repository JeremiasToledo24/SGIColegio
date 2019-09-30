import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';

@Component({
  selector: 'app-inscribir',
  templateUrl: './inscribir.component.html',
  styleUrls: ['./inscribir.component.css']
})
export class InscribirComponent implements OnInit {

  // Stepper
  isLinear = true;

  // Declarar FormGroups
  alumnoFormGroup: FormGroup;
  tutorFormGroup: FormGroup;
  fichaFormGroup: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private _formBuilder: FormBuilder,
    private alumnoService: AlumnoService
  ) { }

  ngOnInit() {
    // Obtener la fecha actual para la inscripción del alumno
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const fechaHoy = yyyy + '-' + mm + '-' + dd;

    // Inicializar formulario DATOS GENERALES DEL ALUMNO
    this.alumnoFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      DNIAlumno: ['', Validators.required],
      cuil: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      domicilio: ['', Validators.required],
      telefono: [''],
      correo: [''],
      fechaIngColegio: ['', Validators.required]
    });

    // Inicializar formulario DATOS DEL TUTOR LEGAL DEL ALUMNO
    this.tutorFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      DNITutor: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      domicilio: ['', Validators.required],
      telefonoPersonal: ['', Validators.required],
      telefonoTrabajo: [''],
      correo: ['', Validators.required],
      cuil: ['', Validators.required],
      parentezco: ['', Validators.required],
      DNIAlumno: ['', Validators.required]
    })

    // Inicializar formulario FICHA MEDICA DEL ALUMNO
    this.fichaFormGroup = this._formBuilder.group({
      DNIAlumno: ['', Validators.required],
      tieneAlergia: ['', Validators.required],
      alergiaMed: [''],
      alergiaDetalle: [''],
      emergenciaNom: ['', Validators.required],
      emergenciaTel: ['', Validators.required],
      emergenciaVinculo: ['', Validators.required],
      tieneMedHab: ['', Validators.required],
      medHabNom: [''],
      medHabDosis: [''],
      tieneMedicoCab: ['', Validators.required],
      medicoCabNom: [''],
      medicoCabTel: [''],
      tieneObraSocial: ['', Validators.required],
      obraSocialNom: [''],
      obraSocialNroAfil: ['']
    })

    // Colocar fecha de hoy al campo fechaIngColegio
    this.alumnoFormGroup.patchValue({
      fechaIngColegio: fechaHoy
    })
  }

  // Colocar DNIAlumno en tutorFormGroup
  setDNIAlumno(alumnoForm) {
    this.tutorFormGroup.patchValue({
      DNIAlumno: alumnoForm.value.DNIAlumno
    })
  }

  // Colocar DNIAlumno en fichaFormGroup
  setDNIAlumno2(tutorForm) {
    this.fichaFormGroup.patchValue({
      DNIAlumno: tutorForm.value.DNIAlumno
    })
  }

  // Inscribir alumno
  addAlumno(alumnoForm: NgForm, tutorForm: NgForm, fichaForm: NgForm) {
    try {
      this.alumnoService.addAlumno(alumnoForm.value)
        .subscribe(
          res => {
            console.log('Alumno agregado')
            this.alumnoService.addTutor(tutorForm.value)
              .subscribe(
                res => {
                  console.log('Tutor agregado')
                }
              );
            this.alumnoService.addFichaMedica(fichaForm.value)
              .subscribe(
                res => {
                  console.log('Ficha médica vinculada.')
                }
              );

            // Limpiar formularios
            this.resetForm(alumnoForm);
            this.resetForm(tutorForm);
            this.resetForm(fichaForm);
          }, error => {
            this.openSnackBar(
              'El alumno ya existe en la base de datos',
              'OK'
            );
          }, () => {
            this.openSnackBar(
              'Alumno registrado',
              'OK'
            );
          }
        );

    } catch (err) { }
  }

  // Limpiar campos de MEDICO DE CABECERA
  clearMedicoCabecera() {
    this.fichaFormGroup.patchValue({
      medicoCabNom: '',
      medicoCabTel: ''
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

  // Reiniciar el formulario
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }
}
