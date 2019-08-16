export class PlanEstudioModel {
    idPlanEstudio: number;
    annio: string;
    idCurso: number;
    idNivel: number;
    constructor(idPlanEstudio?,annio?,idCurso?,idNivel?) {
        this.idPlanEstudio = idPlanEstudio;
        this.annio = annio;
        this.idCurso = idCurso;
        this.idNivel = idNivel;
    }
}