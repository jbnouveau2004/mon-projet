const Stock = require('../models/stockModel');

exports.getAll = async (req, res) => {
  try {
    const stock = await Stock.findAll();
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { emplacement, reference, taille, designation, quantite } = req.body;

    const id = await Stock.create(req.body);
    res.json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};