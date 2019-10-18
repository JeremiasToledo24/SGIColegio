import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { CobrosService } from 'src/app/servicios/cobros/cobros.service';

@Component({
  selector: 'app-dialog-config',
  templateUrl: './dialog-config.component.html',
  styleUrls: ['./dialog-config.component.css']
})
export class DialogConfigComponent implements OnInit {

  vencimiento1 = new FormControl('', Validators.required)
  vencimiento2 = new FormControl('', Validators.required)

  constructor(
    public dialogRef: MatDialogRef<DialogConfigComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private cobroService: CobrosService
  ) { }

  ngOnInit() {
    console.log('data :', this.data);
  }

  // Cerrar dialog
  close() {
    this.dialogRef.close();
  }

  actualizarArancel() {
    if (this.vencimiento1.valid && this.vencimiento2.valid) {
      const vencimientos = { importeVencimiento1: this.vencimiento1.value, importeVencimiento2: this.vencimiento2.value, concepto: this.data.Factura.toUpperCase() }
      console.log('vencimientos :', vencimientos);
      this.cobroService.actualizarArancel(vencimientos, this.data.Factura.toUpperCase(), this.data.nivel)
        .subscribe(
          res => {
            this.cobroService.openSnackBar('Arancel Actualizado', 'ok')
            this.close()
          }
        )
    }
  }
}
