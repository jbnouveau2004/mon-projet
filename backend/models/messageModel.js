//const db = require('../config/db');

//exports.create = (contenu, callback) => {
//  db.run(
//    'INSERT INTO messages (contenu) VALUES (?)',
//    [contenu],
//    function (err) {
//      callback(err, this?.lastID);
//    }
//  );
//};

//exports.findAll = (callback) => {
//  db.all('SELECT * FROM messages', [], callback);
//};

const db = require('../config/db');

exports.findAll = async () => {
  const [rows] = await db.query(
    'SELECT id, contenu, created_at FROM messages ORDER BY id DESC'
  );
  return rows;
};

exports.create = async (contenu) => {
  const [result] = await db.query(
    'INSERT INTO messages (contenu) VALUES (?)',
    [contenu]
  );
  return result.insertId;
};