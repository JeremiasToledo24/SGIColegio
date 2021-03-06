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


  registrarPago(Pago): Observable<any> {
    return this.http.post(`http://localhost:3000/api/Pagos`, Pago)
      .pipe(
        catchError(this.handleError)
      )
  }

  registrarDetallePago(DetallePago): Observable<any> {
    return this.http.post(`http://localhost:3000/api/DetallePagos`, DetallePago)
      .pipe(
        catchError(this.handleError)
      )
  }

  listarFacturasSinPagarProveedor(idProveedor): Observable<any>{
    return this.http.get(`http://localhost:3000/api/vFacturasProveedores?filter[where][and][0][saldo][nlike]=0&filter[where][and][1][idProveedor]=${idProveedor}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  registrarFactura(Factura): Observable<any> {
    return this.http.post(`http://localhost:3000/api/Facturas`, Factura)
      .pipe(
        catchError(this.handleError)
      )
  }

  listarFacturas(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vFacturasProveedores`)
      .pipe(
        catchError(this.handleError)
      )
  }

  listarPagos(): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vPagos`)
      .pipe(
        catchError(this.handleError)
      )
  }

  listarPagosProveedor(idProveedor): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vPagos?filter[where][idProveedor]=${idProveedor}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  listarPagosEntreFechas(fechaI, fechaF): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vPagos?filter[where][fecha][between][0]=${fechaI}&filter[where][fecha][between][1]=${fechaF}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  listarPagosEntreFechasProveedor(fechaI, fechaF, idProveedor): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vPagos?filter[where][and][0][idProveedor]=${idProveedor}&filter[where][fecha][between][0]=${fechaI}&filter[where][fecha][between][1]=${fechaF}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  listarFacturasEntreFechasProveedor(fechaI, fechaF, idProveedor): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vFacturasProveedores?filter[where][and][0][idProveedor]=${idProveedor}&filter[where][fechaVencimiento][between][0]=${fechaI}&filter[where][fechaVencimiento][between][1]=${fechaF}`)
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

  getFacturaID(idFactura): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vFacturasProveedores/${idFactura}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  facturasPorProveedor(idProveedor): Observable<any> {
    return this.http.get(`http://localhost:3000/api/vFacturasProveedores?filter[where][idProveedor]=${idProveedor}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  facturasPagadas() {
    return this.http.get(`http://localhost:3000/api/vFacturasProveedores?filter[where][saldo]=0`)
      .pipe(
        catchError(this.handleError)
      )
  }

  facturasSinPagar() {
    return this.http.get(`http://localhost:3000/api/vFacturasProveedores?filter[where][saldo][nlike]=0`)
      .pipe(
        catchError(this.handleError)
      )
  }

  facturasSinPagarEntreFechas(fechaI, fechaF) {
    return this.http.get(`http://localhost:3000/api/vFacturasProveedores?filter[where][saldo][nlike]=0&filter[where][fechaVencimiento][between][0]=${fechaI}&filter[where][fechaVencimiento][between][1]=${fechaF}`)
      .pipe(
        catchError(this.handleError)
      )
  }


  listarDetalleFactura(idFactura): Observable<any> {
    return this.http.get(`http://localhost:3000/api/DetalleFacturas?filter[where][idFactura]=${idFactura}`)
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
