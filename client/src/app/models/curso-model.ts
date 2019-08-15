export class CursoModel {

  constructor(
    idCurso?,
    nombre?,
    division?,
    idNivel?
  ){
    this.idCurso=idCurso;
    this.nombre=nombre;
    this.division=division;
    this.idNivel = idNivel;
  }

  idCurso: number;
  nombre: string;
  division: string;
  idNivel: number

}
