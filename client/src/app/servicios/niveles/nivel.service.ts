import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NivelModel } from 'src/app/models/nivel-model';

@Injectable({
  providedIn: 'root'
})
export class NivelService {
  api_url: 'http://localhost:3000/api/Niveles'

  listaNiveles: NivelModel[];

  constructor(private http: HttpClient) { }

  //listar niveles
  async listarNiveles(){
    return await this.http.get(this.api_url).toPromise();
  }

  //obtener nivel por id, recibe id como parametro del tipo number
  async obtenerNivel(id:number){
    return await this.http.get(this.api_url + `/${id}`).toPromise();
  }



}
