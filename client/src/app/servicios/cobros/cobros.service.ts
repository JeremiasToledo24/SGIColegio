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

  obtenerCuotasConSaldo():Observable<any>{
    return this.http.get(`http://localhost:3000/api/Cuota?filter[where][saldo][nlike]=0`)
  }

  obtenerCuotasEntreFechas(fechaI,fechaF): Observable<any>{
    return this.http.get(`http://localhost:3000/api/Cuota?filter[where][and][0][saldo][nlike]=0&filter[where][vencimiento1][between][0]=${fechaI}&filter[where][vencimiento1][between][1]=${fechaF}`)
  }


  actualizarArancel(vencimientos, concepto, nivel): Observable<any> {
    return this.http.post(`http://localhost:3000/api/Arancels/update?[where][and][0][concepto]=${concepto}&[where][and][1][nivel]=${nivel}`, vencimientos)
      .pipe(
        catchError(this.handleError)
      )
  }

  obtenerDetallesCobrosEntreFechas(fechaI, fechaF):Observable<any>{
    return this.http.get(`http://localhost:3000/api/vIngresosCuotas?filter[where][fecha][between][0]=${fechaI}&filter[where][fecha][between][1]=${fechaF}`)
  }

  obtenerDetallesCobros():Observable<any>{
    return this.http.get(`http://localhost:3000/api/vIngresosCuotas`)
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
