import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MateriaService } from 'src/app/servicios/materias/materia.service';
import { PlanEstudioService } from 'src/app/servicios/planEstudio/plan-estudio.service';
import { DocenteService } from 'src/app/servicios/docentes/docente.service';
import { AulaService } from 'src/app/servicios/aula/aula.service';
import { CursoService } from 'src/app/servicios/cursos/curso.service';
import { EmpleadoService } from 'src/app/servicios/empleados/empleado.service';
import { ProveedorService } from 'src/app/servicios/proveedor/proveedor.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {
  tipoPlan: boolean = false;
  tipoMat: boolean = false;
  tipoDoc: boolean = false;
  tipoAula: boolean = false;
  tipoCurso: boolean = false;
  tipoEmp: boolean = false;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private materiaService: MateriaService,
    private planService: PlanEstudioService,
    private docenteService: DocenteService,
    private aulaService: AulaService,
    private cursoService: CursoService,
    private empleadoService: EmpleadoService
  ) {
  }

  ngOnInit() {
    // Verifica qué tipo de datos recibe

    if (this.data.dni !== undefined) {
      if (this.data.fechaIngDocencia === undefined) {
        console.log(this.data, 'data empleado')
        this.tipoEmp = true
      } 
      else {
        console.log(this.data, 'data docente')
        this.tipoDoc = true
      }

    }
    if (this.data.id !== undefined) {
      console.log(this.data, 'data plan')
      this.tipoPlan = true
    }
    if (this.data.idMateria !== undefined) {
      console.log(this.data, 'data materia')
      this.tipoMat = true
    }
    if (this.data.idAula !== undefined) {
      console.log(this.data, 'data aula');
      this.tipoAula = true
    }
    if (this.data.idCurso !== undefined) {
      console.log(this.data, 'data curso');
      this.tipoCurso = true
    }

    // Obtener la fecha actual para el registro del docente
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    this.fechaEgrColegio = yyyy + '-' + mm + '-' + dd;

  }

  // Inicializar variable fecha de baja
  fechaEgrColegio: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  eliminarMateria(dataMateria) {
    this.materiaService.eliminarMateria(dataMateria.idMateria).then(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      }
    );
  }

  eliminarPlan(dataPlan) {
    console.log(dataPlan.id)
    this.planService.eliminarPlan(dataPlan.id).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      });
  }

  eliminarDocente(dataDocente) {
    console.log(dataDocente.dni)
    this.docenteService.eliminarDocente(dataDocente.dni).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      }
    )

  }

  eliminarAula(dataAula) {
    console.log(dataAula.idAula)
    this.aulaService.deleteAula(dataAula.idAula).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      }
    )
  }

  eliminarCurso(dataCurso) {
    console.log(dataCurso.idCurso)
    this.cursoService.deleteCurso(dataCurso.idCurso).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      }
    )
  }

  eliminarEmpleado(dataEmpleado) {
    console.log(dataEmpleado.dni)
    this.empleadoService.deleteEmpleado(dataEmpleado.dni).subscribe(
      res => {
        if (res) {
          console.log(res);
          this.dialogRef.close(true);
        }
      }
    )
  }
}
