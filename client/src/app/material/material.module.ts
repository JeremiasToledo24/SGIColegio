// Aquí se importan los modulos a usar de Angular Material :

import {NgModule} from "@angular/core";
import {
  MatFormFieldModule
} from "@angular/material";


@NgModule({
  imports: [
    MatFormFieldModule
  ],
  exports: [
    MatFormFieldModule
  ]
})

export class MaterialModule {
}
