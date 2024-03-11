const express = require('express');
const router = express.Router();
const { getElevInscrisId, getProfesorId } = require('../../model/meditatii');
const connection = require('../../db');

router.get("/:id_profesor", (req, res) => {
  try {
    const id_profesor = req.params.id_profesor;

    const sql = getElevInscrisId(id_profesor);

    connection.query(sql, (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length === 0) {
          res.status(401).send("Unauthorized");
        } else {
          const userDetails = [];
          let count = 0;

          results.forEach((result) => {
            const elevSql = `SELECT * FROM easylearn_users WHERE id = ${result.id_elev}`;
            const profesorSql = `SELECT * FROM easylearn_users WHERE id = ${result.id_profesor}`;

            connection.query(elevSql, (error, elevResult) => {
              if (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
                return;
              }

              connection.query(profesorSql, (error, profesorResult) => {
                if (error) {
                  console.error(error);
                  res.status(500).send("Internal Server Error");
                  return;
                }

                userDetails.push({
                  id_elev: result.id_elev,
                  detalii_elev: elevResult[0],
                  id_profesor: result.id_profesor,
                  nume_profesor: profesorResult[0].nume
                });

                count++;

                if (count === results.length) {
                  res.setHeader("Content-Type", "application/json");
                  res.status(200).send(JSON.stringify(userDetails));
                }
              });
            });
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/elev/:id_elev", (req, res) => {
  try {
    const id_elev = req.params.id_elev;

    const sql = getProfesorId(id_elev);
   
    connection.query(sql, (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length === 0) {
          res.status(401).send("Unauthorized");
        } else {
          const userDetails = [];
          let count = 0;

          results.forEach((result) => {
            const elevSql = `SELECT * FROM easylearn_users WHERE id = ${id_elev}`;
            const profesorSql = `SELECT * FROM easylearn_users WHERE id = ${result.id_profesor}`;

            connection.query(elevSql, (error, elevResult) => {
              if (error) {
                console.error(error);
                res.status(500).send("Internal Server Error");
                return;
              }

              connection.query(profesorSql, (error, profesorResult) => {
                if (error) {
                  console.error(error);
                  res.status(500).send("Internal Server Error");
                  return;
                }

                userDetails.push({
                  id_elev: id_elev, 
                  detalii_elev: elevResult[0], 
                  id_profesor: result.id_profesor,
                  nume_profesor: profesorResult[0].nume
                });

                count++;

                if (count === results.length) {
                  res.setHeader("Content-Type", "application/json");
                  res.status(200).send(JSON.stringify(userDetails));
                }
              });
            });
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
