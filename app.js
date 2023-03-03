//サーバーを立てる
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

//MySQLとの接続
const mysql = require('mysql');

//MySQLの接続情報
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'WaffleTeam_c2023',
  database: 'teamproject'
});

//MySQLに接続できなかった時にエラーを表示する
connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('success');
});


//ルーティング設定
app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('hello.ejs');
    }
  );
});  

app.get('/top', (req, res) => {
  res.render('top.ejs');
});


app.listen(3000);

//test