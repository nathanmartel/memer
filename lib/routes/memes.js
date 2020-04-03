const { Router } = require('express');
const Meme = require('../models/Meme');

module.exports = Router()
  .post('/', (req, res, next) => {
    Meme
      .create(req.body)
      .then(post => res.send(post))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Meme
      .find({})
      .then(post => { console.log('memes', post); res.send(post); })
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Meme
      .findById(req.params.id)
      .then(post => res.send(post))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Meme
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(post => res.send(post))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {
    Meme
      .findByIdAndDelete(req.params.id)
      .then(post => res.send(post))
      .catch(next);
  });
