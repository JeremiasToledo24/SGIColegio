import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MateriaModel } from 'src/app/models/materia-model';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  listaMaterias: MateriaModel[];

  listaMateriasSeleccionadas: MateriaModel[];
  listaCompletaMaterias: MateriaModel[];

  selectedMateria: MateriaModel;

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
    )
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
      this.openSnackBar(error)
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



  async findOne(codigo: string) {
    return this.http.get(`http://localhost:3000/api/Materias/findOne?filter=%7B%22where%22%3A%7B%22codigo%22%3A%22${codigo}%22%7D%7D`
    ).toPromise();
  }

  //devuelve booleano
  buscarMateriaPorCodigo(codigo: string) {
    this.findOne(codigo).then(
      (res: MateriaModel) => {
        if (res !== null) {
          return true;
        } else {
          return false;
        }
      }
    )
  }
}
