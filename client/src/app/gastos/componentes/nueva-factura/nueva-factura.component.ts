import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-factura',
  templateUrl: './nueva-factura.component.html',
  styleUrls: ['./nueva-factura.component.css']
})
export class NuevaFacturaComponent implements OnInit {

  selectProveedorControl = new FormControl('',Validators.required);
  constructor() { }

  ngOnInit() {
  }

}
