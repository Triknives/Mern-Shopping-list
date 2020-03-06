const express = require('express');
const router = express.Router();

//Completed Book model
const ReadBook = require('../../models/ReadBook');

// @route   GET api/Completed Books
// @desc    Get ALL Completed Books
// @access  Public
router.get('/',(req, res ) => {
  ReadBook.find()
    .sort({date: -1})
    .then(readBooks => res.json(readBooks));
});

// @route   POST api/BooksRead
// @desc    Create A Completed Book
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body)
  const newReadBook = new ReadBook({
    title: req.body.title,
    author: req.body.author,
  });
  newReadBook.save().then(readBook => res.json(readBook));
    console.log("Completed Book Added")
});

// @route   Delete api/completedBooks/:id
// @desc    Delete A Completed Book
// @access  Public
router.delete('/:id', (req, res) => {
    ReadBook.findById(req.params.id)
      .then(readBook => readBook.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;
