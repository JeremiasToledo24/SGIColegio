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

  // ---------------------------------------------------------------//
  // ------------- SERVICIOS GENÉRICOS PARA EMPLEADOS ------------- //
  // ---------------------------------------------------------------//

  // Registrar empleado
  addEmpleado(Empleado: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/Empleados', Empleado).pipe(
      catchError(this.handleError)
    );
  }

  // Agregar formacion/experiencia del empleado
  addFormacionEmpleado(Formacion: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/FormacionEmpleados', Formacion).pipe(
      catchError(this.handleError)
    );
  }

  // Eliminar un empleado
  deleteEmpleado(DNI: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/Empleados/${DNI}`).pipe(
      catchError(this.handleError)
    );
  }

  // Editar empleado
  editEmpleado(Empleado: any): Observable<any> {
    return this.http.put('http://localhost:3000/api/Empleados/', Empleado).pipe(
      catchError(this.handleError)
    );
  }

  // Actualizar fechaEgrColegio del empleado
  addBajaEmpleado(Empleado: any): Observable<any> {
    return this.http.put('http://localhost:3000/api/Empleados', Empleado).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener empleados
  getEmpleados(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Empleados?filter[where][dni][neq]=0').pipe(
      catchError(this.handleError)
    );
  }

  // Obtener empleados que son docentes
  getEmpleadosDocentes(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Empleados?filter=%7B%22where%22%3A%7B%22tipoEmpleado%22%3A%22Docente%22%7D%7D').pipe(
      catchError(this.handleError)
    );
  }

  // Obtener empleado que es docente por DNI
  getEmpleadosDocentesDNI(dni): Observable<any> {
    return this.http.get(`http://localhost:3000/api/Empleados/${dni}?filter=%7B%22where%22%3A%7B%22tipoEmpleado%22%3A%22Docente%22%7D%7D`).pipe(
      catchError(this.handleError)
    )
  }

  // Obtener empleado por DNI
  getEmpleadoDNI(dni): Observable<any> {
    return this.http.get(`http://localhost:3000/api/Empleados/${dni}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Obtener empleados dados de baja
  getEmpleadosHistorico(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Empleados-Historicos').pipe(
      catchError(this.handleError)
    )
  }

  // ---------------------------------------------------------------//
  // -------------- SERVICIOS EXCLUSIVOS DE DOCENTES ---------------//
  // ---------------------------------------------------------------//

  // Asignar materia a un docente
  asignarMateria(data): Observable<any> {
    return this.http.post('http://localhost:3000/api/MateriaDocentes', data)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Obtener materias vinculadas a un docente
  getMateriasDocente(id): Observable<any> {
    return this.http.get(`http://localhost:3000/api/MateriasXDocentes?filter=%7B%22where%22%3A%7B%22idDocente%22%3A%22${id}%22%7D%7D`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Borrar materias vinculadas a un docente
  desvincularTodasMaterias(id): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/MateriaDocentes/${id}`)
      .pipe(
        catchError(this.handleError)
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
