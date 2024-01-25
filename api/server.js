const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnection = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Import rute
const rutaInregistrare = require('./rute/easylearn-users/rutaInregistrare');
const rutaInfoUtilizator = require('./rute/easylearn-users/rutaInfoUtilizator');
const rutaLogin = require('./rute/easylearn-users/rutaLogin');

const rutaVizibilitate = require('./rute/anunturi/rutaVizibilitate');

const rutaIncarcarePoza = require('./rute/profil/rutaIncarcarePoza');
const rutaInfoPoza = require('./rute/profil/rutaInfoPoza');
const rutaSolicitareImagine = require('./rute/profil/rutaSolicitareImagine');
const rutaNumeTitluImagine = require('./rute/profil/rutaNumeTitluImagine');

const rutaIncarcareMaterial = require('./rute/material-didactic/rutaIncarcareMaterial');
const rutaInfoMaterial = require('./rute/material-didactic/rutaInfoMaterial');

const rutaSolicitareMaterial = require('./rute/material-didactic/rutaSolicitareMaterial');
const rutaCaleMaterial = require('./rute/material-didactic/rutaCaleMaterial');

const rutaSolicitare = require('./rute/solicitari/rutaSolicitare');
const rutaStatusSolicitare = require('./rute/solicitari/rutaStatusSolicitare');

const rutaStatusMeditatii = require('./rute/meditatii/rutaMeditatii');


// Utilizare rute
app.use("/api/inregistrare", rutaInregistrare);
app.use("/api/easylearn-users/info-utilizatori", rutaInfoUtilizator);
app.use("/api/easylearn-users/login", rutaLogin);

app.use("/api/anunt/vizibilitate", rutaVizibilitate);

app.use('/api/profil-uploads', rutaIncarcarePoza);
app.use("/api/profil/info-poza", rutaInfoPoza);
app.use("/api/profil/show", rutaSolicitareImagine);
app.use("/api/profil/imagini-utilizator", rutaNumeTitluImagine);

app.use("/api/material-didactic/uploads", rutaIncarcareMaterial);
app.use("/api/material-didactic/insertMaterial", rutaInfoMaterial);
app.use("/api/material-didactic/download", rutaSolicitareMaterial);
app.use("/api/material-didactic/documents", rutaCaleMaterial);

app.use("/api/meditatii/solicita-colaborare", rutaSolicitare);
app.use("/api/meditatii/status", rutaStatusSolicitare);

app.use("/api/meditatii/inscris", rutaStatusMeditatii);


// Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serverul ruleaza la portul ${PORT}`);
});
