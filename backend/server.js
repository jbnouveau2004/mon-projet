//const app = require('./app');

//const PORT = 3000;
//app.listen(PORT, () => {
//  console.log(`API lancée sur http://localhost:${PORT}`);
//});




//Après l'instazllation de dotenv
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API lancée sur http://localhost:${PORT}`);
});