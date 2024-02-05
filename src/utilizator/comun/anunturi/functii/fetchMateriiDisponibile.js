export const fetchMateriiDisponibile = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/materie');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Eroare la obținerea materiilor:', error);
    }
};
