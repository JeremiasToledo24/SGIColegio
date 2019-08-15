import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CursoModel } from 'src/app/models/curso-model';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  api_url: 'http://localhost:3000/api/Cursos'

  selectedCurso: CursoModel;
  listaCursos: CursoModel[]
  constructor(private http: HttpClient) {
    this.selectedCurso = new CursoModel();
  }

  //listar todos los cursos
  async listarCursos() {
    return await this.http.get('http://localhost:3000/api/Cursos').toPromise();
  }

  //obtener curso por id
  async obtenerCurso(id: number) {
    return await this.http.get('http://localhost:3000/api/Cursos' + `${id}`).toPromise();
  }



  //agregar nuevo curso
  async agregarCurso(curso: CursoModel) {
    return await this.http.post('http://localhost:3000/api/Cursos', curso).toPromise();
  }

}
