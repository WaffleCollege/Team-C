//サーバーを立てる
const express = require('express');
//MySQLとの接続
const mysql = require('mysql');
const app = express();
const port = 3000;
//express-sessionの読み込み
const session = require('express-session');



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
    console.log('ログインしていません');
  } else {
    console.log('ログインしています');
  }
  next();
});

//メインページのルーティング設定
app.get('/', (req, res) => {
  res.render('hello.ejs');
});  


//ユーザー登録画面のルーティング設定
//app.get('/signup', (req, res) => {
  //res.render('signup.ejs');
//});

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


//カレンダーページのルーティング設定
app.get('/main', (req, res) => {
  res.render('calendar.ejs');
});

app.listen(3000);
