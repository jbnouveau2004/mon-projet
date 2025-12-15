//const Message = require('../models/messageModel');

//exports.getAll = (req, res) => {
//  Message.findAll((err, rows) => {
//    if (err) return res.status(500).json(err);
//    res.json(rows);
//  });
//};

//exports.create = (req, res) => {
//  const { contenu } = req.body;
//  if (!contenu) return res.status(400).json({ error: 'Message vide' });

//  Message.create(contenu, (err, id) => {
//    if (err) return res.status(500).json(err);
//    res.json({ id });
//  });
//};

const Message = require('../models/messageModel');

exports.getAll = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { contenu } = req.body;
    if (!contenu) {
      return res.status(400).json({ error: 'Message vide' });
    }

    const id = await Message.create(contenu);
    res.json({ id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};