import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';
import {UiService} from "../../servicios/ui/ui.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  perfil = new FormGroup({
    usuario: new FormControl(''),
    pass: new FormControl(''),
  });
  constructor(private authService: AuthServiceService,
              private uiService: UiService,
              private router: Router) { }

  ngOnInit() {
    this.uiService.setEnable(false);
  }

  login() {
    this.authService.login(this.perfil.value.usuario, this.perfil.value.pass)
      .subscribe(response => {
        // Peticion aceptada
        this.uiService.setEnable(true);
        this.router.navigate(['/home']);
      });
  }

  ngOnDestroy(): void {
  }

}
