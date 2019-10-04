
module.exports = function (Docentecurso) {

   /*  Docentecurso.validation = function (idCurso, dni, idMateria, cb) {
        var ds = Docentecurso.dataSource;
        var sql = 'SELECT * FROM DocenteCurso AS DC WHERE DC.idCurso=? and DC.DNIDocente =? and idMateria =?';
        ds.connector.query(sql, [idCurso], [dni], [idMateria],
            function (err, Docentecurso) {
                if (condition) {
                    console.error(err);
                    cb(err, Docentecurso);
                }
            })
    }

    Docentecurso.remoteMethod(
        'validation',
        {
            http: { verb: 'get' },
            description: 'valida docente asignado',
            accepts: [
                { arg: 'idCurso', type: 'number' },
                { arg: 'dni', type: 'number' },
                { arg: 'idMateria', type: 'number' }
            ],
            returns: { arg: 'data', type: ['Docentecurso'], root: true }
        }
    ); */

};
