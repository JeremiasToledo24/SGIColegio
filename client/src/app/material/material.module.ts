// Aquí se importan los modulos a usar de Angular Material :

import { NgModule } from '@angular/core';
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
  MatCheckboxModule,
  MatDividerModule,
  MatAutocompleteModule, MatPaginatorModule, MatDialogModule
} from '@angular/material';



import { LayoutModule } from '@angular/cdk/layout';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    MatCheckboxModule,
    MatDividerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule
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
    MatCheckboxModule,
    MatDividerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})

export class MaterialModule {
}
