const getVizibilitate = () => {
    return `SELECT * FROM anunturi WHERE vizibilitate = 1`;
};

const setVizibilitate = (email, newValue) => {
    return `UPDATE anunturi SET vizibilitate = ${newValue ? 1 : 0} WHERE email = '${email}'`;
  };
  
  module.exports = {
    getVizibilitate,
    setVizibilitateTrue: (email) => setVizibilitate(email, true),
    setVizibilitateFalse: (email) => setVizibilitate(email, false),
  };