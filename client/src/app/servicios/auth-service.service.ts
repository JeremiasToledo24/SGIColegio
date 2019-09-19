import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UiService} from "./ui/ui.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient,
              private uiService: UiService) {

   }

   currentUser(): any {
      return localStorage.getItem('user');
   }

   logout(){
      localStorage.removeItem('user');
   }

   login(usuario, pass) {
    // Lo que tiene que hacer es realizar la peticion al Servidor y luego mandar el estado para actualizar la navbar
    // con pipe creamos un observable en funcion de otro observable
    return this.http.get('http://localhost:3000/api/Empleados')
      .pipe(map (response => {
        localStorage.setItem('user', JSON.stringify(response));
        this.uiService.setUser(response);
        return response;
      }));
   }

}
