const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = 'mongodb://db_eugene:db_eugene4523455@ds229909.mlab.com:29909/meanapp';

mongoose.Promise = global.Promise;
mongoose.connect(db, (err) => {
  if (err) {
    console.log('Connection db error!');
  }
});

router.get('/posts', (req, res) => {
  console.log('Requesting posts');
  post.find({})
    .exec((err, posts) => {
      if (err) {
        console.log('Error getting the posts');
      } else {
        res.json(posts);
        // console.log(posts);
      }
    });
});

router.get('/details/:id', (req, res) => {
  console.log('Requesting Details post');
  post.findById(req.params.id)
    .exec((err, post) => {
      if (err) {
        console.log('Error getting the Details post');
      } else {
        res.json(post);
        console.log(post);
      }
    });
});

router.get('/post', (req, res) => {
  console.log('Add new Post');
  let Post = post; // This approach is for eslint [new post()] should be [new Post()]
  let newPost = new Post();

  newPost.title = req.body.title;
  newPost.url = req.body.url;
  newPost.description = req.body.description;

  newPost.save((err, addedPost) => {
    if (err) {
      console.log('Error added new post');
    } else {
      res.json(addedPost);
    }
  });
});

module.exports = router;
