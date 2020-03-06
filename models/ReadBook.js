const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ReadBookSchema = new Schema ({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ReadBook = mongoose.model('readBook', ReadBookSchema);
