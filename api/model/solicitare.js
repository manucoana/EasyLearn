const verificaExistentaSolicitare = (idElev, idProfesor) => {
    return 'SELECT * FROM solicitari WHERE id_elev = ? AND id_profesor = ?';
  };
  
  const insertSolicitare = (idElev, idProfesor) => {
    return 'INSERT INTO solicitari (id_elev, id_profesor) VALUES (?, ?)';
  };
  
  const updateSolicitareAcceptata = () => {
    return 'UPDATE solicitari SET status = "acceptata" WHERE id_elev = ? AND id_profesor = ?';
  };
  
  const insertIntoMeditatii = () => {
    return 'INSERT INTO meditatii (id_profesor, id_elev) SELECT id_profesor, id_elev FROM solicitari WHERE id_elev = ? AND id_profesor = ?';
  };
  
  const updateSolicitareRespinsa = () => {
    return 'UPDATE solicitari SET status = "respinsa" WHERE id_elev = ? AND id_profesor = ?';
  };
  
  module.exports = {
    verificaExistentaSolicitare,
    insertSolicitare,
    updateSolicitareAcceptata,
    insertIntoMeditatii,
    updateSolicitareRespinsa,
  };