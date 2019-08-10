import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MateriaModel } from 'src/app/models/materia-model';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  api_url: 'http://localhost:3000/api/Materias'

  listProducts: MateriaModel[];
  constructor(private http: HttpClient) { 
    
  }

  //Obtener listado de materias

  listarMaterias(){
    return this.http.get(this.api_url);
  }

  //Agregar Materia

  agregarMateria(Materia: MateriaModel){
    return this.http.post(this.api_url, Materia);
  }



}