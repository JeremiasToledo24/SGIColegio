import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {

   }

   currentUser(){

   }

   logout(){

   }


   login(usuario, pass){
     return this.http.get('http://localhost:3000/api/Empleados')

   }

}
