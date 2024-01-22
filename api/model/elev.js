const getElevInscris = (nume_profesor) => {
    return `SELECT nume_elev, nume_profesor FROM elevi WHERE nume_profesor = '${nume_profesor}'`;
};


module.exports = {
    getElevInscris
};