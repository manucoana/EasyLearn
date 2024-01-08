const getVizibilitate = () => {
    return `SELECT * FROM anunturi WHERE vizibilitate = 1`;
};

module.exports = {
    getVizibilitate
}