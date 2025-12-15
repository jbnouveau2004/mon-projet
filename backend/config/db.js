//const sqlite3 = require('sqlite3').verbose();

//const db = new sqlite3.Database('./database.db', (err) => {
//  if (err) console.error(err.message);
//});

//db.run(`
//  CREATE TABLE IF NOT EXISTS messages (
//    id INTEGER PRIMARY KEY AUTOINCREMENT,
//    contenu TEXT NOT NULL
//  )
//`);

//module.exports = db;





//const mysql = require('mysql2');

//const pool = mysql.createPool({
//  host: 'localhost',
//  user: 'jb',
//  password: 'xxxx',
//  database: 'nodeapp',
//  waitForConnections: true,
//  connectionLimit: 10
//});

//module.exports = pool.promise();




//Après l'instazllation de dotenv
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool.promise();