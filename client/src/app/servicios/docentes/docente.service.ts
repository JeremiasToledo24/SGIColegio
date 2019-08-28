import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }


  // Agregar docente a BD
  agregarDocente(Docente: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/Docentes', Docente)
    .pipe(
      catchError(this.handleError)
    );
  }

  agregarFormacionDocente(Formacion: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/FormacionDocentes', Formacion);
  }


  // Traer la lista de todos los docentes registrados en la BD
  listarDocentes() {
    return this.http.get('http://localhost:3000/api/Docentes').pipe(
      catchError(this.handleError)
    )
  }

  // Eliminar un docente
  eliminarDocente(DNI: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/Docentes/${DNI}`).pipe(
      catchError(this.handleError)
    )
  }


  // Manejo de errores segun la respuesta HTTP y mostrar en consola un resumen del error
  private handleError(error: HttpErrorResponse) {
    if (error.status === 422) {
      console.log('docente ya registrado');
    }
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

  /* openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
        duration: 2000
      }
    );
  }  */
}

