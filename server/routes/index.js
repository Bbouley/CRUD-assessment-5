var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'));
var Song = require('../models/songs.js');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get all
router.get('/songs', function(req, res, next){
  Song.findQ()
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.send({'ERROR': err});
  });
});

//get single
router.get('/song/:id', function(req, res, next){
  Song.findByIdQ(req.params.id)
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.send({'ERROR' : err});
  });
});


//post single
router.post('/songs', function(req, res, next){
  var newSong = new Song(req.body);
  newSong.saveQ()
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.send({'ERROR': err});
  });
});


//put single
router.put('/song/:id', function(req, res, next){
  var update = req.body;
  var options = {new:true};
  Song.findByIdAndUpdateQ(req.params.id, update, options)
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.send({"ERROR":err});
  });
});


//delete single
router.delete('/song/:id', function(req, res, next){
  Song.findByIdAndRemoveQ(req.params.id)
  .then(function(response){
    res.json(response);
  })
  .catch(function(err){
    res.send({"ERROR":err});
  });
});

module.exports = router;
