import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanEstudioModel } from 'src/app/models/plan-estudio-model';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class PlanEstudioService {
plan: PlanEstudioModel;
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { 
    this.plan = new PlanEstudioModel();
  }
  openSnackBar(m: string) {
    this._snackBar.open(
      m, '', {
        duration: 1500
      }
    )
  }

  
  agregarPlan(plan: PlanEstudioModel){
    return this.http.post(`http://localhost:3000/api/PlanEstudios`,plan);
  }

  listarPlanes(){
    return this.http.get(`http://localhost:3000/api/ListaPlanesYMaterias`);
  }

  eliminarPlan(id: number){
    return this.http.delete(`http://localhost:3000/api/PlanEstudios/${id}`)
  }

  editarPlan(){
    
  }
}
