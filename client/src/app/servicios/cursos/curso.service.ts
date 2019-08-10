import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from 'src/app/models/curso-model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  api_url: 'http://localhost:3000/api/Cursos'

  listaCursos: CursoModel[]
  constructor(private http: HttpClient) { }

  //listar todos los cursos
  async listarCursos(){
    return await this.http.get(this.api_url).toPromise();
  }

  //obtener curso por id
  async obtenerCurso(id: number){
    return await this.http.get(this.api_url + `${id}`).toPromise();
  }

  

  //agregar nuevo curso
  //TODO 

}
