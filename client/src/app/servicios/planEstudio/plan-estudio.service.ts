import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PlanEstudioModel } from 'src/app/models/plan-estudio-model';
import { MatSnackBar } from '@angular/material';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanEstudioService {
  plan: PlanEstudioModel;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.plan = new PlanEstudioModel();
  }

  openSnackBar(m: string) {
    this._snackBar.open(
      m, '', {
      duration: 1500
    }
    )
  }


  agregarPlan(plan): Observable<any> {
    return this.http.post(`http://localhost:3000/api/PlanEstudios`, plan)
      .pipe(
        catchError(this.handleError)
      );
  }

  nuevoPlanMateria(plan_materia): Observable<any> {
    return this.http.post('http://localhost:3000/api/PlanMateria', plan_materia)
      .pipe(
        catchError(this.handleError)
      )
  }

  listarPlanes() {
    return this.http.get(`http://localhost:3000/api/PlanMateriaViews`);
  }

  listarPlanesAgrupados(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/PlanEstudios`)
      .pipe(
        catchError(this.handleError)
      )
  }

  eliminarPlan(id: number) {
    return this.http.delete(`http://localhost:3000/api/PlanEstudios/${id}`)
  }

  editarPlan() {

  }

  listarMateriasPlan(id): Observable<any> {
    return this.http.get(`http://localhost:3000/api/PlanMateriaViews?filter=%7B%22where%22%3A%7B%22idPlanEstudio%22%3A%22${id}%22%7D%7D`)
      .pipe(
        catchError(this.handleError)
      )
  }

  registrarPeriodoLectivo(pl): Observable<any> {
    return this.http.post(`http://localhost:3000/api/PeriodoLectivos`, pl)
      .pipe(
        catchError(this.handleError)
      )
  }


  listarPeriodos(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/PeriodoLectivoViews`)
      .pipe(
        catchError(this.handleError)
      )
  }

  getPeriodos(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/PeriodoLectivos`)
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
