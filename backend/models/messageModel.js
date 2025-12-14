const db = require('../config/db');

exports.create = (contenu, callback) => {
  db.run(
    'INSERT INTO messages (contenu) VALUES (?)',
    [contenu],
    function (err) {
      callback(err, this?.lastID);
    }
  );
};

exports.findAll = (callback) => {
  db.all('SELECT * FROM messages', [], callback);
};