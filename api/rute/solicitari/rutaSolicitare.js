const express = require('express');
const router = express.Router();
const connection = require('../../db');
const { verificaExistentaSolicitare, insertSolicitare } = require('../../model/solicitare');

router.post('/', (req, res) => {
    try {
        const { idElev, idProfesor } = req.body;
        const selectSql = verificaExistentaSolicitare(idElev, idProfesor);
        const selectValues = [idElev, idProfesor];

        connection.query(selectSql, selectValues, (error, results) => {
            if (error) {
                return res.status(500).send('Internal Server Error');
            }

            if (results.length > 0) {
                return res.status(400).json({ message: 'Solicitarea exista deja' });
            }

            const insertSql = insertSolicitare(idElev, idProfesor);
            const insertValues = [idElev, idProfesor];

            connection.query(insertSql, insertValues, (insertError) => {
                if (insertError) {
                    console.error('Eroare la adaugarea solicitarii in baza de date', insertError);
                    return res.status(500).send('Internal Server Error');
                }

                res.status(200).json({ message: 'Solicitarea de colaborare a fost trimisa cu succes' });
            });
        });
    } catch (error) {
        console.error('Eroare la gestionarea solicitarii de colaborare', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/:id_profesor', (req, res) => {
    try {
        const idProfesor = req.params.id_profesor;

        const selectSql = `SELECT * FROM solicitari WHERE id_profesor = ?`;
        const selectValues = [idProfesor];

        connection.query(selectSql, selectValues, (error, results) => {
            if (error) {
                return res.status(500).send('Internal Server Error');
            }

            res.status(200).json(results);
        });
    } catch (error) {
        console.error('Eroare la preluarea solicitarilor de colaborare', error);
        res.status(500).send('Internal Server Error');
    }

});

router.get('/elevi/:id_profesor', (req, res) => {
    try {
        const idProfesor = req.params.id_profesor;

        const selectSql = `
            SELECT id_elev
            FROM solicitari
            WHERE id_profesor = ?`;

        const selectValues = [idProfesor];

        connection.query(selectSql, selectValues, (error, results) => {
            if (error) {
                return res.status(500).send('Internal Server Error');
            }

            const idElevValues = results.map(result => result.id_elev);
            res.status(200).json(idElevValues);
        });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;