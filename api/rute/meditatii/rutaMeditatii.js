const express = require('express');
const router = express.Router();
const { getElevInscrisId } = require('../../model/meditatii');
const connection = require('../../db');

router.get("/:id_profesor", async (req, res) => {
  try {
    const id_profesor = req.params.id_profesor;
    const sql = getElevInscrisId(id_profesor);

    connection.query(sql, async (error, results) => {
      if (error) {
        res.status(500).send("Internal Server Error");
      } else {
        if (results.length === 0) {
          res.status(401).send("Unauthorized");
        } else {
          try {
            const promises = results.map(async (result) => {
              const elevSql = `SELECT nume FROM easylearn_users WHERE id = ${result.id_elev}`;
              const profesorSql = `SELECT nume FROM easylearn_users WHERE id = ${result.id_profesor}`;

              const [elevResult, profesorResult] = await Promise.all([
                queryPromise(elevSql),
                queryPromise(profesorSql)
              ]);

              return {
                id_elev: result.id_elev,
                nume_elev: elevResult[0].nume,
                id_profesor: result.id_profesor,
                nume_profesor: profesorResult[0].nume
              };
            });

            const userDetails = await Promise.all(promises);

            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(userDetails));
          } catch (error) {
            console.error(error);
            res.status(500).send("Internal Server Error");
          }
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

function queryPromise(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = router;
