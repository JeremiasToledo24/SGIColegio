import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class CobrosService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }


  actualizarArancel(vencimientos, concepto, nivel): Observable<any> {
    return this.http.post(`http://localhost:3000/api/Arancels/update?[where][and][0][concepto]=${concepto}&[where][and][1][nivel]=${nivel}`, vencimientos)
      .pipe(
        catchError(this.handleError)
      )
  }

  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
      duration: 4000
    }
    )
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
