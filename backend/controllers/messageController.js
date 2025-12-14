const Message = require('../models/messageModel');

exports.getAll = (req, res) => {
  Message.findAll((err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
};

exports.create = (req, res) => {
  const { contenu } = req.body;
  if (!contenu) return res.status(400).json({ error: 'Message vide' });

  Message.create(contenu, (err, id) => {
    if (err) return res.status(500).json(err);
    res.json({ id });
  });
};