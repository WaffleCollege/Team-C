//サーバーを立てる
const express = require('express');
const app = express();
const port = 3000;
//express-sessionの読み込み
const session = require('express-session');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

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

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  if (req.session.userId === undefined) {
    console.log('ログインしていません');
  } else {
    console.log('ログインしています');
  }
  next();
});

//メインページのルーティング設定
app.get('/', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    (error, results) => {
      console.log(results);
      res.render('hello.ejs');
    }
  );
});  

//ユーザー登録画面のルーティング設定
app.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

//ログインページのルーティング設定
app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login', (req, res) => {
  const email = req.body.email
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if(results.length > 0) {
        if (req.body.password === results[0].password){
          // ユーザーIDをセッション情報に保存
          req.session.userId = results[0].id;
          res.redirect('/');
        } else {
          res.redirect('/login');
        }
      } else {
        res.redirect('/login');
      }
    }
  );
});

app.listen(3000);
