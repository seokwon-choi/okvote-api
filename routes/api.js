var express = require('express');
var router = express.Router();

router.get('/user/:id', function(req, res, next) {
  const id = req.params.id;
  const user = { id, name: 'kenu' };
  res.json({ title: 'Get', user });
});

router.post('/user', function(req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const user = { id, name };
  res.json({ title: 'Post', user });
});

router.put('/user', function(req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const user = { id, name };
  res.json({ title: 'Put', user });
});

router.delete('/user', function(req, res, next) {
  const id = req.body.id;
  res.json({ title: 'Delete', result: 'deleted' });
});

module.exports = router;
