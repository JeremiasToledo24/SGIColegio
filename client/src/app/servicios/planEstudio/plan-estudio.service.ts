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
}
