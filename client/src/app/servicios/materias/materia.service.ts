import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MateriaModel } from 'src/app/models/materia-model';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  api_url: 'http://localhost:3000/api/Materias'

  listaMaterias: MateriaModel[];


  constructor(private http: HttpClient) {
    this.listaMaterias = [];
  }

  async getMaterias(){
    return await this.http.get(this.api_url).toPromise();
  }

  
  //Obtener listado de materias

  listarMaterias() {
    this.getMaterias().then(
      res => {
        this.listaMaterias = res as MateriaModel[];
      }
    );
  }

  //Agregar Materia

  async agregarMateria(Materia: MateriaModel) {
    return await this.http.post(this.api_url, Materia).toPromise();
  }



}