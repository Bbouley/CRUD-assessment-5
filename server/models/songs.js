var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Song = new Schema({
  artist: String,
  title: String,
  play_count: Number,
  genre: String,
});

module.exports = mongoose.model('songs', Song);
