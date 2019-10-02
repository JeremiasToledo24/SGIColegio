// Aquí se importan los modulos a usar de Angular Material :

import {NgModule} from '@angular/core';
import {
  MatExpansionModule,
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
  MatAutocompleteModule, MatPaginatorModule, MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatRadioModule,
} from '@angular/material';


import {LayoutModule} from '@angular/cdk/layout';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    MatExpansionModule,
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
    MatDialogModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    MatRadioModule,
    MatExpansionModule
  ],
  exports: [
    MatExpansionModule,
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
    MatDialogModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatStepperModule,
    MatRadioModule,
    MatExpansionModule,
  ],
  providers: [MatNativeDateModule]
})

export class MaterialModule {
}
