const express = require('express');
const router = express.Router();

//Review model
const Review = require('../../models/Review');

// @route   GET api/Reviews
// @desc    Get ALL reviews
// @access  Public
router.get('/',(req, res ) => {
  Review.find()
    .sort({date: -1})
    .then(reviews => res.json(reviews));
});

// @route   POST api/Reviews
// @desc    Create A Review
// @access  Public
router.post('/', (req, res) => {
  console.log(req.body)
  const newReview = new Review({
    post: req.body.post
  });
  newReview.save().then(review => res.json(review));
    console.log("Review added")
});

// @route   Delete api/reviews/:id
// @desc    Delete A Review
// @access  Public
router.delete('/:id', (req, res) => {
    Review.findById(req.params.id)
      .then(review => review.remove().then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;