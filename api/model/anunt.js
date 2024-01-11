const getVizibilitate = () => {
    return `SELECT * FROM anunturi WHERE vizibilitate = 1`;
};

const getVizibilitateByEmail = (email) => {
    return `SELECT * FROM anunturi WHERE email = '${email}' AND vizibilitate = 1`;
  };

const setVizibilitate = (email, newValue) => {
    return `UPDATE anunturi SET vizibilitate = ${newValue ? 1 : 0} WHERE email = '${email}'`;
  };
  
  module.exports = {
    getVizibilitate,
    getVizibilitateByEmail,
    setVizibilitateTrue: (email) => setVizibilitate(email, true),
    setVizibilitateFalse: (email) => setVizibilitate(email, false),
  };