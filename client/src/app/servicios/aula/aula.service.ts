import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AulaService {
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }

  // Registrar aula
  addAula(Aula: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/Aulas', Aula).pipe(
      catchError(this.handleError)
    );
  }

  // Obtener lista de aulas
  getAula(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Aulas').pipe(
      catchError(this.handleError)
    );
  }

  

  // Obtener aula por id
  getAulaByID(id): Observable<any> {
    return this.http.get(`http://localhost:3000/api/Aulas/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Editar docente
  editarAula(Aula: any): Observable<any> {
    return this.http.put('http://localhost:3000/api/Aulas/', Aula).pipe(
      catchError(this.handleError)
    )
  }

  // Eliminar aula
  deleteAula(ID: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/Aulas/${ID}`).pipe(
      catchError(this.handleError)
    )
  }

  //trae todos los cursos de un aula
  getCursos(idAula): Observable<any>{
    return this.http.get(`http://localhost:3000/api/Cursos?filter=%7B%22where%22%3A%7B%22idAula%22%3A%22${idAula}%22%7D%7D`)
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
