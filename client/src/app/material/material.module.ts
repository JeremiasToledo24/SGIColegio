// Aquí se importan los modulos a usar de Angular Material :

import {NgModule} from "@angular/core";
import {
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule, MatInputModule
} from "@angular/material";

import {MatIconModule, MatTableModule} from '@angular/material';


@NgModule({
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule
  ],
  exports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatTableModule,
    MatIconModule
  ]
})

export class MaterialModule {
}
