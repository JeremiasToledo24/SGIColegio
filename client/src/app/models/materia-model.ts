export class MateriaModel {

  constructor(
    idMateria?,
    nombre?,
    codigo?,
    outputNombre?,
    outputCodigo?
  ) {
    this.idMateria = idMateria;
    this.nombre = nombre;
    this.codigo = codigo;
    this.outputNombre = outputNombre;
    this.outputCodigo = outputCodigo;
  }

  idMateria: number;
  nombre: string;
  codigo: string;
  outputNombre: string;
  outputCodigo: string;
}
