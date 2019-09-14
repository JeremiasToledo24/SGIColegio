import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(
    private http: HttpClient
  ) { }

  // Registrar empleado
  addEmpleado(Empleado: any): Observable<any>{
    return this.http.post('http://localhost:3000/api/Empleados', Empleado).pipe(
      catchError(this.handleError)
    );
  }

  //agregar formacion/experiencia del empleado
  agregarFormacionEmpleado(Formacion: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/FormacionEmpleados', Formacion).pipe(
      catchError(this.handleError)
    );
  }

  // Manejo de errores segun la respuesta HTTP y mostrar en consola un resumen del error
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
