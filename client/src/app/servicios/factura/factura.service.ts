import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient,
    private snackBar: MatSnackBar) { }
  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
      duration: 4000
    }
    );
  }

  registrarFactura(Factura): Observable<any> {
    return this.http.post(`http://localhost:3000/api/Facturas`, Factura)
      .pipe(
        catchError(this.handleError)
      )
  }

  registrarDetalleFactura(DetalleFactura): Observable<any> {
    return this.http.post(`http://localhost:3000/api/DetalleFacturas`, DetalleFactura)
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
