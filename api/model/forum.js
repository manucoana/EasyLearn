const getAllPostari = () => {
    return `SELECT * FROM postari_forum`;
};

const insertPostare = ( titlu, text, user_id) => {
    return `INSERT INTO postari_forum (titlu, text, user_id) VALUES (?, ?, ?)`;
};

module.exports = {
    getAllPostari,
    insertPostare
};