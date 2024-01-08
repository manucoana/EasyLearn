const insertUser = (nume, varsta, oras, descriere, email, parola) => {
    return 'INSERT INTO easylearn_users (nume, varsta, oras, descriere, email, parola) VALUES (?, ?, ?, ?, ?, ?)';
};

const getUserById = (id) => {
    return `SELECT * FROM easylearn_users WHERE id = ${id}`;
};

const getAllUsers = () => {
    return "SELECT * FROM easylearn_users";
};

const getUserByEmail = (email) => {
    return 'SELECT * FROM easylearn_users WHERE email = ?';
};

const loginUser = (email, password) => {
    return "SELECT * FROM easylearn_users WHERE email = ? AND parola = ?";
};

const getUserTypeByEmail = (descriere) => {
    return `SELECT descriere FROM easylearn_users WHERE email = ?`;
  };


module.exports = {
    insertUser,
    getUserById,
    getAllUsers,
    getUserByEmail,
    loginUser,
    getUserTypeByEmail
};