import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanEstudioModel } from 'src/app/models/plan-estudio-model';

@Injectable({
  providedIn: 'root'
})
export class PlanEstudioService {
plan: PlanEstudioModel;
  constructor(private http: HttpClient) { 
    this.plan = new PlanEstudioModel();
  }
}
