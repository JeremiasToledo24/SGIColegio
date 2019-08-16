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

  obtenerCursosPorNivel(idNivel: number) {
    try {
      return this.http.get<CursoModel[]>(`http://localhost:3000/api/Cursos?filter=%7B%22where%22%3A%7B%22idNivel%22%3A%22${idNivel}%22%7D%7D `
    );
       
  } catch (error) {
      console.log(error);
    }
    
  }


  //agregar nuevo curso
  async agregarCurso(curso: CursoModel) {
    return await this.http.post('http://localhost:3000/api/Cursos', curso).toPromise();
  }

}
