import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  // ---------------------------------------------------------------//
  // -------------------- SERVICIOS DE ALUMNOS ---------------------//
  // ---------------------------------------------------------------//

  // Registrar alumno
  addAlumno(Alumno: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/Alumnos', Alumno).pipe(
      catchError(this.handleError)
    );
  }

  // Registrar tutor legal
  addTutor(Tutor: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/AlumnoTutors', Tutor).pipe(
      catchError(this.handleError)
    );
  }

  // Registrar ficha medica
  addFichaMedica(FichaMedica: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/AlumnoFichaMedicas', FichaMedica).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener alumnos registrados en el sistema
  getAlumnos(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Alumnos').pipe(
      catchError(this.handleError)
    );
  }

  // Obtener alumno por DNI
  getAlumnoDNI(dni: any): Observable<any> {
    return this.http.get(`http://localhost:3000/api/Alumnos/${dni}`).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener datos del tutor de un alumno determinado
  getTutor(dni: any): Observable<any> {
    return this.http.get(`http://localhost:3000/api/AlumnoTutors?filter=%7B%22where%22%3A%7B%22DNIAlumno%22%3A${dni}%7D%7D`)
  }

  // Obtener ficha medica de un alumno determinado
  getFichaMedica(dni): Observable<any> {
    return this.http.get(`http://localhost:3000/api/AlumnoFichaMedicas?filter=%7B%22where%22%3A%7B%22DNIAlumno%22%3A%22${dni}%22%7D%7D`).pipe(
      catchError(this.handleError)
    );
  }

  // Asignar alumno a curso
  asignAlumno(asignacion): Observable<any> {
    return this.http.post('http://localhost:3000/api/AlumnoCursos', asignacion).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener curso al que pertenece el alumno
  getAlumnoCurso(dni): Observable<any> {
    return this.http.get(`http://localhost:3000/api/AlumnoCursos?filter=%7B%22where%22%3A%7B%22DNIAlumno%22%3A${dni}%7D%7D`)
  }

  getAlumnosInscriptos(periodo,curso,division, nivel): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vInscripcionAlumnos?filter[where][and][0][idPeriodo]=${periodo}&filter[where][and][1][curso]=${curso}&filter[where][and][2][division]=${division}&filter[where][and][4][nivel]=${nivel}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  VerificarAlumnoInscripto(periodo,curso,division, nivel, apellido, nombre, dni): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vInscripcionAlumnos?filter[where][and][0][idPeriodo]=${periodo}&filter[where][and][1][DNIAlumno]=${dni}`)
      .pipe(
        catchError(this.handleError)
      )
      /* &filter[where][and][1][curso]=${curso}&filter[where][and][2][division]=${division}&filter[where][and][3][nivel]=${nivel}&filter[where][and][4][nombre]=${nombre}&filter[where][and][5][apellido]=${apellido}&filter[where][and][6][DNIAlumno]=${dni} */
  }

  VerificarAlumnoInscriptoCursos(periodo,division, nivel, apellido, nombre, dni): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vInscripcionAlumnos?filter[where][and][0][idPeriodo]=${periodo}&filter[where][and][1][division]=${division}&filter[where][and][2][nivel]=${nivel}&filter[where][and][3][nombre]=${nombre}&filter[where][and][4][apellido]=${apellido}&filter[where][and][5][DNIAlumno]=${dni}`)
      .pipe(
        catchError(this.handleError)
      )
  }
  inscribirAlumno(alumno): Observable<any>{
    return this.http.post(`http://localhost:3000/api/InscripcionAlumnos`,alumno)
    .pipe(
      catchError(this.handleError)
    )
  }

  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
      duration: 4000
    }
    );
  }

  // ---------------------------------------------------------------//
  // -------------- MANEJO DE ERRORES SEGUN HTTP RES ---------------//
  // ---------------------------------------------------------------//

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }
}
