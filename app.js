const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('チームプロジェクト');
});  

app.listen(3000);

//test.commit.button