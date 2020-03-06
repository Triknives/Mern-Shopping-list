const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CompletedSchema = new Schema ({

  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  dateCompleted: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = CompletedBook = mongoose.model('completedBook', CompletedSchema);
