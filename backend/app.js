// Installation d dotenv
require('dotenv').config()
console.log('DB HOST =', process.env.DB_HOST); // test si ça fonctionne
// --------------------

const express = require('express');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');

const stockRoutes = require('./routes/stockRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', messageRoutes);

app.use('/api', stockRoutes);

module.exports = app;




// POUR AFFICHER DANS UNE PAGE WEB
//const path = require('path');
//app.use(express.static(path.join(__dirname, '../frontend')));

//app.get('/', (req, res) => {
//  res.sendFile(path.join(__dirname, '../frontend/index.html'));
//});