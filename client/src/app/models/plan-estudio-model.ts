export class PlanEstudioModel {
  idPlanEstudio: number;
  annio: string;
  idCurso: number;
  idNivel: number;

  constructor(annio?, idCurso?, idNivel?, idPlanEstudio?) {
    this.idPlanEstudio = idPlanEstudio;
    this.annio = annio;
    this.idCurso = idCurso;
    this.idNivel = idNivel;
  }
}
