// Aquí se importan los modulos a usar de Angular Material :

import {NgModule} from "@angular/core";
import {
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule, MatInputModule
} from "@angular/material";

import {MatIconModule, MatTableModule, MatSelectModule} from '@angular/material';


@NgModule({
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule
  ]
})

export class MaterialModule {
}
