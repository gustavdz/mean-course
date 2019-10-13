const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Header','Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

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
