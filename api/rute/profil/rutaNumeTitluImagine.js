const express = require('express');
const router = express.Router();
const path = require('path');
const connection = require('../../db');
const { getDateImagineUtilizator, getDateImagineProfesor } = require('../../model/profil');

router.get('/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const sql = getDateImagineUtilizator(email);
        const values = [email];

        connection.query(sql, values, (error, results) => {
            if (error) {
                res.status(500).send("Internal Server Error");
            } else {
                if (results.length > 0) {
                    res.status(200).send(results[0]);
                } else {
                    res.status(404).send('Profile not found');
                }
            }
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});


router.get('/profesor/:nume_profesor', async (req, res) => {
    try {
        const nume_profesor = req.params.nume_profesor;
        const sql = getDateImagineProfesor(nume_profesor);
        const values = [nume_profesor];

        connection.query(sql, values, (error, results) => {
            if (error) {
                res.status(500).send("Internal Server Error");
            } else {
                console.log("Results:", results);

                if (results.length > 0) {
                    res.status(200).send(results[0]);
                } else {
                    console.log("Profile not found for", nume_profesor);
                    res.status(404).send('Profile not found');
                }
            }
        });
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});




module.exports = router;