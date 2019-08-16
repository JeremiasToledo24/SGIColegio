// Aquí se importan los modulos a usar de Angular Material :

import {NgModule} from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule,
  MatSelectModule,
  MatCheckboxModule
} from "@angular/material";



  import {LayoutModule} from "@angular/cdk/layout";

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    LayoutModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    LayoutModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatToolbarModule,
    MatCheckboxModule
  ]
})

export class MaterialModule {
}
