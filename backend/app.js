const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();
mongoose.connect("mongodb://gdecker:Gustav0DZ123@localhost:27017/node-angular?authSource=admin")
  .then(() =>{
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, OPTIONS');
  next();
});


app.post('/api/posts',(req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  console.log(post);
  post.save();
  res.status(201).json({
    message: 'Post added successfully.',
  });
});


app.get('/api/posts',(req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: 'Posts fetch successfully!',
      posts: documents,
    });
  });
});

module.exports = app;
