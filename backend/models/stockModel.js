const db = require('../config/db');

exports.findAll = async () => {
  const [rows] = await db.query(
    'SELECT * FROM stock ORDER BY id ASC'
  );
  return rows;
};

exports.create = async (emplacement, reference, taille, designation, quantite) => {
  const [result] = await db.query(
    'INSERT INTO stock (emplacement, reference, taille, designation, quantite) VALUES (?, ?, ?, ?, ?)',
    [emplacement, reference, taille, designation, quantite]
  );
  return result.insertId;
};