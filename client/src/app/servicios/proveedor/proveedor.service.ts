import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar
  ) { }

  openSnackBar(m: string, a: string) {
    this.snackBar.open(
      m, a, {
      duration: 4000
    }
    );
  }

  // ---------------------------------------------------------------//
  // ------------------ SERVICIOS DE PROVEEDORES -------------------//
  // ---------------------------------------------------------------//

  // Obtener lista de proveedores registrados en el sistema
  getProveedores(): Observable<any> {
    return this.http.get('http://localhost:3000/api/Proveedores').pipe(
      catchError(this.handleError)
    );
  }

  // Registrar nuevo proveedor
  registerProveedor(Proveedor: any): Observable<any> {
    return this.http.post('http://localhost:3000/api/Proveedores', Proveedor).pipe(
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
