const insertProfil = (nume, titlu, cale) => {
    return `INSERT INTO profil (nume, titlu, cale) VALUES (?, ?, ?)`;
};

const getImagine = (nume, titlu) => {
    return `SELECT * FROM profil WHERE nume = ? AND titlu = ?`;
};

const getDateImagineUtilizator = (email) => {
    return `SELECT profil.nume, profil.titlu FROM profil JOIN easylearn_users users ON profil.nume = users.nume WHERE users.email = ?`;
};

const getDateImagineProfesor = (nume_profesor) => {
    return `SELECT profil.nume, profil.titlu FROM profil JOIN anunturi ON profil.nume = anunturi.nume_profesor where anunturi.nume_profesor = ?`;
};


module.exports = {
    insertProfil,
    getImagine,
    getDateImagineUtilizator,
    getDateImagineProfesor
}
