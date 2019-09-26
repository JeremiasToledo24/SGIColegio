import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NivelService {
  api_url: 'http://localhost:3000/api/Niveles'


  constructor(private http: HttpClient) {
  }

  //listar niveles
   listarNiveles(): Observable<any> {
    return  this.http.get(this.api_url)
    .pipe(
      catchError(this.handleError)
    );
  }

  //obtener nivel por id, recibe id como parametro del tipo number
  async obtenerNivel(id: number) {
    return await this.http.get(this.api_url + `/${id}`).toPromise();
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
