const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    min: 10,
    max: 75,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    min: 25,
    max: 256,
    required: true
  }
});

module.exports = mongoose.model('post', postSchema);
