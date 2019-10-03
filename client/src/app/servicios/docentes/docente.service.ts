import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  docenteSeleccionado = [];

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.docenteSeleccionado = [];
  }

  seleccionarDocente(docente) {
    this.docenteSeleccionado = []
    this.docenteSeleccionado.push(docente);
    console.log(this.docenteSeleccionado)
  }

  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
      duration: 4000
    }
    );
  }


  // Agregar docente a BD
  agregarDocente(Docente: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/Docentes', Docente).pipe(
      catchError(this.handleError)
    );
  }

  //borrar materias vinculadas
  desvincularTodasMaterias(id): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/MateriaDocentes/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  //agregar formacion del docente
  agregarFormacionDocente(Formacion: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/FormacionDocentes', Formacion);
  }

  // Traer la lista de todos los docentes registrados en la BD
  listarDocentes() {
    return this.http.get('http://localhost:3000/api/Docentes')
      .pipe(
        catchError(this.handleError)
      )
  }

  registrarMateriaDocente(md): Observable<any> {
    return this.http.post(`http://localhost:3000/api/DocenteCursos`, md)
      .pipe(
        catchError(this.handleError)

      )
  }

  // Obtener docentes dados de baja¿
  getDocenteHistorico(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Docentes-Historicos').pipe(
      catchError(this.handleError)
    )
  }

  // Eliminar un docente
  eliminarDocente(DNI: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/api/Docentes/${DNI}`).pipe(
      catchError(this.handleError)
    )
  }

  //buscar docente por DNI
  obtenerDocentesDNI(dni): Observable<any> {
    return this.http.get(`http://localhost:3000/api/Docentes/${dni}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  //buscar docente por nombre
  obtenerDocentesNombre(data): Observable<any> {
    return this.http.get(`http://localhost:3000/api/Docentes?filter=%7B%22where%22%3A%7B%22nombre%22%3A%22${data}%22%7D%7D`)
      .pipe(
        catchError(this.handleError)
      )
  }

  //buscar docente por apellido
  obtenerDocentesApellido(data): Observable<any> {
    return this.http.get(`http://localhost:3000/api/Docentes?filter=%7B%22where%22%3A%7B%22apellido%22%3A%22${data}%22%7D%7D`)
      .pipe(
        catchError(this.handleError)
      )
  }

  // Editar docente
  editarDocente(Docente: any): Observable<any> {
    return this.http.put('http://localhost:3000/api/Docentes/', Docente).pipe(
      catchError(this.handleError)
    )
  }

  //OBTENER MATERIAS X DOCENTE
  obtenerMateriasDocente(id): Observable<any> {
    return this.http.get(`http://localhost:3000/api/MateriasXDocentes?filter=%7B%22where%22%3A%7B%22idDocente%22%3A%22${id}%22%7D%7D`
    )
      .pipe(
        catchError(this.handleError)
      );
  }

  asignarMateria(data): Observable<any> {
    return this.http.post('http://localhost:3000/api/MateriaDocentes', data)
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
