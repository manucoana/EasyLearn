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
const rutaUpdateUserData = require('./rute/profil/rutaUpdateUserData');

const rutaIncarcareMedia = require('./rute/incarcare-media/rutaIncarcareMedia');
const rutaInfoMaterial = require('./rute/material-didactic/rutaInfoMaterial');

const rutaSolicitareMaterial = require('./rute/material-didactic/rutaSolicitareMaterial');
const rutaDownload = require('./rute/material-didactic/rutaDownload');
const rutaCaleMaterial = require('./rute/material-didactic/rutaCaleMaterial');

const rutaSolicitare = require('./rute/solicitari/rutaSolicitare');
const rutaStatusSolicitare = require('./rute/solicitari/rutaStatusSolicitare');

const rutaStatusMeditatii = require('./rute/meditatii/rutaMeditatii');
const rutaMaterii = require('./rute/materie/rutaMaterie');

const rutaMesaje = require('./rute/mesagerie/rutaMesaje');

const rutaForum = require('./rute/forum/rutaForum');
const rutaRaspuns = require('./rute/forum/rutaRaspuns');

const rutaIncarcareProfil = require('./rute/incarcare-media/rutaIncarcareProfil');

const rutaNote = require('./rute/note/rutaNote')

const rutaMedalii = require('./rute/medalii/rutaMedalii')
const rutaMedaliiAward= require('./rute/medalii/rutaAcordareMedalie')

// Utilizare rute
app.use("/api/inregistrare", rutaInregistrare);
app.use("/api/easylearn-users/info-utilizatori", rutaInfoUtilizator);
app.use("/api/easylearn-users/login", rutaLogin);

app.use("/api/anunt/vizibilitate", rutaVizibilitate);

app.use('/api/profil-uploads', rutaIncarcarePoza);
app.use("/api/profil/info-poza", rutaInfoPoza);
app.use("/api/profil/show", rutaSolicitareImagine);
app.use("/api/profil/imagini-utilizator", rutaNumeTitluImagine);
app.use("/api/profil/update", rutaUpdateUserData);

app.use("/api/incarcare-media/server_uploads", rutaIncarcareMedia);
app.use("/api/incarcare-media/profil_uploads", rutaIncarcareProfil);

app.use("/api/material-didactic/insertMaterial", rutaInfoMaterial);
app.use("/api/material-didactic", rutaSolicitareMaterial);
app.use("/api/download", rutaDownload);
app.use("/api/material-didactic/documents", rutaCaleMaterial);

app.use("/api/meditatii/solicita-colaborare", rutaSolicitare);
app.use("/api/meditatii/status", rutaStatusSolicitare);

app.use("/api/meditatii/inscris", rutaStatusMeditatii);

app.use("/api/materie", rutaMaterii);

app.use("/api/mesagerie", rutaMesaje);

app.use("/api/forum", rutaForum);
app.use("/api/forum/raspunsuri", rutaRaspuns);

app.use("/api/note", rutaNote);

app.use("/api/medalii", rutaMedalii);
app.use("/api/medalii/award", rutaMedaliiAward);

// Port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serverul ruleaza la portul ${PORT}`);
});
