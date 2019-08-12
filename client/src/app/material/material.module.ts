// Aquí se importan los modulos a usar de Angular Material :

import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatIconModule, MatTableModule} from '@angular/material';


@NgModule({
  imports: [
    MatFormFieldModule,
    MatTableModule,
    MatIconModule
  ],
  exports: [
    MatFormFieldModule,
    MatTableModule,
    MatIconModule

  ]
})

export class MaterialModule {
}
