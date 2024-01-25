const insertUser = (nume, varsta, oras, tip_utilizator, email, parola) => {
    return 'INSERT INTO easylearn_users (nume, varsta, oras, tip_utilizator, email, parola) VALUES (?, ?, ?, ?, ?, ?)';
};

const insertElev = (id_elev, nume_elev) => {
    return 'INSERT INTO elevi (id_elev, nume_elev) VALUES (?, ?)';
};

const insertProfesor = (id_profesor, nume_profesor) => {
    return 'INSERT INTO profesori (id_profesor, nume_profesor) VALUES (?, ?)';
};

const insertAnunt = (nume_profesor, email, vizibilitate) => {
    return 'INSERT INTO anunturi (nume_profesor, email, vizibilitate) VALUES (?, ?, false)';
};

module.exports = {
    insertUser,
    insertElev,
    insertProfesor,
    insertAnunt
};