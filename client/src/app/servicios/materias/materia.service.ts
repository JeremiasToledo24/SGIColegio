import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MateriaModel} from 'src/app/models/materia-model';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  listaMaterias: MateriaModel[];

  selectedMateria: MateriaModel;

  constructor(private http: HttpClient) {
    this.selectedMateria = new MateriaModel(0, '', '');


  constructor(private http: HttpClient) {
  }

  // Obtener listado de materias
  async listarMaterias() {
    return await this.http.get('http://localhost:3000/api/Materias').toPromise();
  }

  // Agregar Materia
  async agregarMateria(Materia: MateriaModel) {
    return await this.http.post('http://localhost:3000/api/Materias', Materia).toPromise();
  }
}
