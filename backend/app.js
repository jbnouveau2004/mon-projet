// Installation de dotenv
require('dotenv').config()
console.log('DB HOST =', process.env.DB_HOST); // test si ça fonctionne
// --------------------

const express = require('express');
const cors = require('cors');
//const messageRoutes = require('./routes/messageRoutes');

//const stockRoutes = require('./routes/stockRoutes');

const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(cors());
app.use(express.json());

module.exports = app;

//app.use('/api', messageRoutes);

//app.use('/api', stockRoutes);

app.use('/api', itemRoutes);






// POUR AFFICHER DANS UNE PAGE WEB
//const path = require('path');
//app.use(express.static(path.join(__dirname, '../frontend')));

//app.get('/', (req, res) => {
//  res.sendFile(path.join(__dirname, '../frontend/index.html'));
//});