//サーバーを立てる
const express = require('express');
//MySQLとの接続
const mysql = require('mysql');
const app = express();
const port = 3000;
//express-sessionの読み込み
const session = require('express-session');

//cssファイルが入っているpublicフォルダの読み込み
app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

//MySQLの接続情報
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'WaffleTeam_c2023',
  database: 'teamc'
});

app.use(
 session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

//app.use関数で常にログイン状態を確認
app.use((req, res, next) => {
  if (req.session.userId === undefined) {
    res.locals.username = 'ゲスト';
  } else {
    res.locals.username = req.session.username;
  }
  next();
});

//メインページのルーティング設定
app.get('/', (req, res) => {
  res.render('hello.ejs');
});  

//カレンダーページのルーティング設定
app.get('/main', (req, res) => {
  res.render('calendar.ejs');
});

//会員登録ページのルーティング設定
app.get('/signup', (req, res) => {
  res.render('signup.ejs');
});

//ログインページのルーティング設定
app.get('/login', (req, res) => {
  res.render('login.ejs');
});

app.post('/login', (req, res) => {
  const email = req.body.email;
  connection.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    (error, results) => {
      if(results.length > 0) {
        if (req.body.password === results[0].password){
          // ユーザーIDをセッション情報に保存
          req.session.userId = results[0].id;
          req.session.username = results[0].username;
          res.redirect('/main');
        } else {
          res.redirect('/login');
        }
      } else {
        res.redirect('/login');
      }
    }
  );
});


//ログアウトするルーティングの設定
app.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    res.redirect('/main');
  });
});

app.listen(3000);
