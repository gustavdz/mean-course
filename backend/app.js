const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'fad123123',
      title: 'First server-side post',
      content: 'This is comming from the server'
    },
    {
      id: 'fad321321',
      title: 'Second server-side post',
      content: 'This is comming from the server too'
    },
    {
      id: 'fad543',
      title: 'Third server-side post',
      content: 'This is comming from the server actually too'
    },
  ];
  res.status(200).json({
    message: 'Posts fetch succesfully!',
    posts: posts
  });
});

module.exports = app;
