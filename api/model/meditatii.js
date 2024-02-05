const getElevInscrisId = (id_profesor) => {
    return `SELECT id_elev, id_profesor FROM meditatii WHERE id_profesor = '${id_profesor}'`;
};

const getProfesorId = (id_elev) => {
    return `SELECT id_elev, id_profesor FROM meditatii WHERE id_elev = '${id_elev}'`;
};

module.exports = {
    getElevInscrisId,
    getProfesorId
};