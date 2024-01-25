//mutat in inregistrare
/* const insertUser = (nume, varsta, oras, tip_utilizator, email, parola) => {
    return 'INSERT INTO easylearn_users (nume, varsta, oras, tip_utilizator, email, parola) VALUES (?, ?, ?, ?, ?, ?)';
}; */

const getUserById = (id) => {
    return `SELECT * FROM easylearn_users WHERE id = ${id}`;
};

const getUserByEmail = (email) => {
    return 'SELECT * FROM easylearn_users WHERE email = ?';
};

const loginUser = (email, password) => {
    return "SELECT * FROM easylearn_users WHERE email = ? AND parola = ?";
};

const getUserTypeByEmail = (tip_utilizator) => {
    return `SELECT tip_utilizator FROM easylearn_users WHERE email = ?`;
  };


module.exports = {
    getUserById,
    getUserByEmail,
    loginUser,
    getUserTypeByEmail
};