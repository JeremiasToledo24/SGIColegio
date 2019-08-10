export class CursoModel {

  constructor(
    idCurso = 0,
    nombre = '',
    division = ''
  ){
    this.idCurso=idCurso;
    this.nombre=nombre;
    this.division=division;
  }

  idCurso: number;
  nombre: string;
  division: string;

}
