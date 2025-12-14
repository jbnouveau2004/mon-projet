const app = require('./app');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API lancée sur http://localhost:${PORT}`);
});