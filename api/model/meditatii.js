const getElevInscrisId = (id_profesor) => {
    return `SELECT id_elev, id_profesor FROM meditatii WHERE id_profesor = '${id_profesor}'`;
};


module.exports = {
    getElevInscrisId
};