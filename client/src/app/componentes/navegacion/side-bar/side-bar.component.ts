import {Component, OnInit} from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})

export class SideBarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
  }

  redirigir(opcion: string){
    if (opcion === 'alumno') {
      this.router.navigate(['/listaAlumnos']);

    }
  }

}
