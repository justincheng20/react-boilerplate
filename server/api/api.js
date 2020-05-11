const express = require('express');
const app = express();
app.use(express.json());

let data = ["TEST", "string", "beans"];

app.get('/', async function (req, res, next) {
  try {
    return res.json({ data });
  } catch (err) {
    return next(err);
  };
});

app.post('/', async function (req, res, next) {
  try {
    data = [req.body.name, ...data];
    return res.json({data});
  } catch (err) {
    return next(err);
  };
});

module.exports = app;