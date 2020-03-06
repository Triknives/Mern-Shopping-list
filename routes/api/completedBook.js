const express = require('express');
const router = express.Router();

//Review model
const CompletedBook = require('../../models/CompletedBook');

// @route   GET api/Completed Books
// @desc    Get ALL Completed Books
// @access  Public
router.get('/',(req, res ) => {
  CompletedBook.find()
    .sort({date: -1})
    .then(completedBooks => res.json(completedBooks));
});

// @route   POST api/CompletedBooks
// @desc    Create A Completed Book
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body)
  const newCompletedBook = new CompletedBook({
    title: req.body.title,
    author: req.body.author,
    dateCompleted: req.body.dateCompleted
  });
  newCompletedBook.save().then(completedBook => res.json(completedBook));
    console.log("Completed Book Added")
});

// @route   Delete api/completedBooks/:id
// @desc    Delete A Completed Book
// @access  Public
router.delete('/:id', (req, res) => {
    CompletedBook.findById(req.params.id)
      .then(completedBook => completedBook.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;
