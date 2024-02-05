/* const express = require('express');
const router = express.Router();
const { getElevInscrisId } = require('../../model/meditatii');
const connection = require('../../db');

//gaseste solicitarile profesorului pentru notificari
router.get("/:id_elev", (req, res) => {
    try {
        const id_elev = req.params.id_elev;



        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
 */