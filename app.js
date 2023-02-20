const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.render('hello.ejs');
  });  

app.get('/', (req, res) => {
  res.render('top.ejs');
});


app.listen(3000);

//test