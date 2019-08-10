export class MateriaModel {

  constructor(
    idMateria = 0,
    nombre = '',
    codigo = ''
  ){
    this.idMateria=idMateria;
    this.nombre=nombre;
    this.codigo=codigo
  }

  idMateria: number;
  nombre: string;
  codigo: string;

}
