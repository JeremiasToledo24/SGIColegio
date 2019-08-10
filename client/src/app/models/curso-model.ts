export class CursoModel {

  constructor(
    idCurso,
    nombre,
    division
  ){
    this.idCurso=idCurso;
    this.nombre=nombre;
    this.division=division;
  }

  idCurso: number;
  nombre: string;
  division: string;

}
