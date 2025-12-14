const express = require('express');
const cors = require('cors');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', messageRoutes);

module.exports = app;


const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});