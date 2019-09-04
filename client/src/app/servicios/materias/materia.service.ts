import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {MateriaModel} from 'src/app/models/materia-model';
import {MatSnackBar} from '@angular/material';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  listaMaterias: MateriaModel[];
  listaMateriasSeleccionadas: MateriaModel[];
  listaCompletaMaterias: MateriaModel[];
  selectedMateria: MateriaModel;
  datasource: MateriaModel[] = [];

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    this.selectedMateria = new MateriaModel(0, '', '');
    this.listaMateriasSeleccionadas = [];
    this.listaCompletaMaterias = [];

  }

  openSnackBar(m: string) {
    this._snackBar.open(
      m, '', {
        duration: 1500
      }
    );
  }

  // Obtener listado de materias
  listarMaterias() {
    return this.http.get('http://localhost:3000/api/Materias');
  }

  // Agregar Materia
  async agregarMateria(Materia: MateriaModel) {
    try {
      return await this.http.post('http://localhost:3000/api/Materias', Materia).toPromise();
    } catch (error) {
      this.openSnackBar(error);
    }
  }

  async getExist(id: number) {
    return await this.http.get(`http://localhost:3000/api/Materias/${id}/exists`).toPromise();
  }

  async exist(id: number) {
    class Exist {
      exists: boolean;
    }

    var exist = new Exist();
    exist = await new Promise(resolve => {
      this.getExist(id).then((res) => {
        resolve(res as Exist);
      });
    });
    if ((exist.exists)) {
      return true;
    } else {
      return false;
    }
  }

  getMateriaByID(id): Observable<any> {
    return this.http.get(`http://localhost:3000/api/Materias?filter=%7B%22where%22%3A%7B%22idMateria%22%3A%22${id}%22%7D%7D`)
      .pipe(
        catchError(this.handleError)
      )
  }


  findOne(codigo: string): Observable<any> {
    return this.http.get(`http://localhost:3000/api/Materias/findOne?filter=%7B%22where%22%3A%7B%22codigo%22%3A%22${codigo}%22%7D%7D`
    ).pipe(
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

  // devuelve booleano
  buscarMateriaPorCodigo(codigo: string) {
    this.findOne(codigo).subscribe(
      (res: MateriaModel) => {
        if (res !== null) {
          return true;
        } else {
          return false;
        }
      }
    );
  }

  // Eliminar materia
  async eliminarMateria(id: number) {
    return await this.http.delete(`http://localhost:3000/api/Materias/${id}`).toPromise();
  }

  agregarMatPlan(planxmateria) {
    return this.http.post(`http://localhost:3000/api/PlanMateria`, planxmateria);
  }

  //Actualizar materia
  async actualizarMateria(materia: any) {
    return this.http.put(`http://localhost:3000/api/Materias/`, materia).toPromise();
  }
}
