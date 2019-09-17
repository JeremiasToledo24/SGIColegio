import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CursoModel } from 'src/app/models/curso-model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  api_url: 'http://localhost:3000/api/Cursos'

  selectedCurso: CursoModel;
  listaCursos: CursoModel[]

  constructor(private http: HttpClient) {
    this.selectedCurso = new CursoModel();
  }

  //listar todos los cursos
  listarCursos(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Cursos').pipe(
    catchError(this.handleError)
    );
  }

  //listar todos los cursos sin aulas
  listarCursosSinAula(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Cursos?filter=%7B%22where%22%3A%7B%22idAula%22%3Anull%7D%7D').pipe(
    catchError(this.handleError)
    );
  }

  //obtener curso por id
   obtenerCurso(id: number):Observable<any> {
    return this.http.get('http://localhost:3000/api/Cursos' + `${id}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  obtenerCursosPorNivel(idNivel: number) {
    try {
      return this.http.get<CursoModel[]>(`http://localhost:3000/api/Cursos?filter=%7B%22where%22%3A%7B%22idNivel%22%3A%22${idNivel}%22%7D%7D `
      );

    } catch (error) {
      console.log(error);
    }

  }


  //agregar nuevo curso
  async agregarCurso(curso: CursoModel) {
    return await this.http.post('http://localhost:3000/api/Cursos', curso).toPromise();
  }

  // Eliminar curso
  deleteCurso(Curso: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/Cursos/${Curso}`)
  }

  // Editar curso
  editarCurso(Curso: any): Observable<any> {
    return this.http.put('http://localhost:3000/api/Cursos/', Curso)
  }

  /* asignar aula */
  asignarAula(curso:any): Observable<any>{
    return this.http.put(`http://localhost:3000/api/Cursos/`,curso)
    .pipe(
      catchError(this.handleError)
    )
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
