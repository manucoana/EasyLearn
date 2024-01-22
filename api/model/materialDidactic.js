const insertMaterial = (nume_profesor, nume_elev, tip_material, cale) => {
    return 'INSERT INTO material_didactic (nume_profesor, nume_elev, tip_material, titlu, cale) VALUES (?, ?, ?, ?,?)';
};

const getTitluCale = () => {
    return 'SELECT titlu, cale FROM material_didactic WHERE nume_elev = ? AND tip_material = ?';
};

const getMaterial = () => {
    return 'SELECT * FROM material_didactic WHERE nume_elev = ? AND tip_material = ? AND titlu = ?';
}

module.exports = {
    insertMaterial,
    getTitluCale, 
    getMaterial
}
