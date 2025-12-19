const db = require('../config/db');

exports.create = async (data) => {
  const { emplacement, reference, taille, designation, quantite } = data;

  const [result] = await db.query(
    `INSERT INTO stock (emplacement, reference, taille, designation, quantite)
     VALUES (?, ?, ?, ?, ?)`,
    [emplacement, reference, taille, designation, quantite]
  );

  return result.insertId;
};

exports.findAll = async () => {
  const [rows] = await db.query(
    'SELECT * FROM stock ORDER BY id DESC'
  );
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query(
    'SELECT * FROM stock WHERE id = ?',
    [id]
  );
  return rows[0];
};

exports.update = async (id, data) => {
  const { emplacement, reference, taille, designation, quantite } = data;

  const [result] = await db.query(
    `UPDATE stock
     SET emplacement = ?, reference = ?, taille = ?, designation = ?, quantite = ?
     WHERE id = ?`,
    [emplacement, reference, taille, designation, quantite, id]
  );

  return result.affectedRows;
};

exports.delete = async (id) => {
  const [result] = await db.query(
    'DELETE FROM stock WHERE id = ?',
    [id]
  );

  return result.affectedRows;
};