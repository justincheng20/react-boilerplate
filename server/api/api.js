const express = require('express');
const app = express();
app.use(express.json());

let data = [];

app.get('/', async function(req, res, next) {
  try {
    return res.status(200).json({ data });
  } catch (err) {
    return next(err);
  }
});

app.post('/', async function(req, res, next) {
  try {
    const { item } = { ...req.body };
    if (item.trim().length === 0) throw new Error('error');
    data = [item, ...data];
    return res.status(201).json({ item });
  } catch (err) {
    return next(err);
  }
});

module.exports = app;
