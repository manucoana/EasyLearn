const insertMaterial = (nume_profesor, nume_elev, tip_material, titlu, cale, lesson_number) => {
    return 'INSERT INTO material_didactic (nume_profesor, nume_elev, tip_material, titlu, cale, lesson_number) VALUES (?, ?, ?, ?, ?, ?)';
  };
  
  const getTitluCale = () => {
    return 'SELECT titlu, cale, tip_material, lesson_number FROM material_didactic WHERE nume_elev = ? AND nume_profesor = ? AND tip_material = ?';
  };
  
  const getMaterial = () => {
    return 'SELECT * FROM material_didactic WHERE nume_elev = ? AND nume_profesor = ? AND tip_material = ? AND titlu = ?  AND lesson_number = ?';
  };
  
  const getMaterialsByLesson = () => {
    return 'SELECT * FROM material_didactic WHERE nume_elev = ? AND nume_profesor = ? AND tip_material = ? AND lesson_number = ?';
  };
  
  const getAllLessons = () => {
    return 'SELECT DISTINCT lesson_number FROM material_didactic WHERE nume_elev = ? AND nume_profesor = ? AND tip_material = ?';
  };
  
  module.exports = {
    insertMaterial,
    getTitluCale,
    getMaterial,
    getMaterialsByLesson,
    getAllLessons
  };
  