import { Component, OnInit, Inject } from '@angular/core';
import { AlumnoService } from 'src/app/servicios/alumnos/alumno.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dialog-inscribir',
  templateUrl: './dialog-inscribir.component.html',
  styleUrls: ['./dialog-inscribir.component.css']
})
export class DialogInscribirComponent implements OnInit {

  displayedColumns: string[] = ['dni', 'apellido', 'nombre', 'operaciones'];
  dataSource;
  alumno;

  alumnoBuscado;
  cursoBuscado;

  constructor(
    private alumnoService: AlumnoService,
    public dialogRef: MatDialogRef<DialogInscribirComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.alumnoService.getAlumnos()
      .subscribe(
        res => {
          let data;
          data = res as [];
          console.log('data :', data);
          this.dataSource = new MatTableDataSource(data);
        }
      )
  }

  inscribir(alumno) {
    this.alumnoService.VerificarAlumnoInscripto(this.data.idPeriodo, this.data.curso, this.data.division, this.data.nivel, alumno.apellido, alumno.nombre, alumno.DNIAlumno)
      .subscribe(
        (res: []) => {
          console.log('res :', res);
          if (res.length === 0) {
            const iA = { DNIAlumno: alumno.DNIAlumno, idPeriodo: this.data.idPeriodo, curso: this.data.curso, division: this.data.division, nivel: this.data.nivel }
            this.alumnoService.inscribirAlumno(iA)
              .subscribe(
                res => {
                  console.log('res :', res);
                }
              )
          } else {
            this.alumnoService.openSnackBar(`El alumno ya se encuentra inscripto en el curso: ${res[0].curso}, Division:${res[0].division} `, 'OK')
          }
        }
      )
  }

}
