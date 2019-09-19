import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  perfil = new FormGroup({
    usuario: new FormControl(''),
    pass: new FormControl(''),
  });
  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.perfil.value.usuario, this.perfil.value.pass)
  }

}
