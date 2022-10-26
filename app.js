import express from 'express';
import path from 'path';
import mysql from 'mysql';
import request from 'request';
import * as fs from 'fs';
import * as bodyParser from 'body-parser';

const dbconfig = {
  host: 'localhost',
  user: 'root',
  password: 'TheoHernandez19!',
  port:'8282',
  database: 'in_the_m'
}
const connection = mysql.createConnection(dbconfig);

const app = express();
app.set('port', process.env.PORT || 3333);

const __dirname = path.resolve();

// console.log(app);
// console.log("==========================================");
// console.log(mysql);

app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, '/form.html'));
});

app.listen(app.get('port'), () => { 
  console.log(app.get('port'), '번 포트에서 대기 중');
});

console.log(bodyParser.default.urlencoded);
console.log(bodyParser.default.urlencoded({ extends: true }));

app.use(bodyParser.default.urlencoded({ extends: true }));

app.post('/writeText', (req, res) => { 
  //const today = new Date();

  console.log(req);
  // console.log("============================================aaaaaaaaaaaaaaaaaaaaaaaa==============================================");
  // console.log(req.client.parser);
  // console.log("================================================bbbbbbbbbbbbbbbbbbbbbb==========================================");
  // console.log(req.client.parser._headers);
  // console.log(req.client.parser._headers[0]);
  //console.log(req);
  // console.log(req.client);
  // console.log("================================================bbbbbbbbbbbbbbbbbbbbbb==========================================");
  
  // console.log("================================================ccccccccccccccccccccccccccc==========================================");
  // console.log(req.client.parser._httpMessage);
  // //console.log(req.messageBody);
  // console.log("================================================ccccccccccccccccccccccccccc==========================================");
  // console.log("================================================ccccccccccccccccccccccccccc==========================================");
  // console.log("================================================ccccccccccccccccccccccccccc==========================================");
  // console.log(req.body.form);
  

  // const title = req.body.form.title;
  // const writer = req.body.writer;
  // const context = req.body.context;

  // console.log(title);
  // console.log(writer);
  // console.log(context);

  res.redirect('/');

  //const sql = `INSERT INTO board (title, writer, context, date) VALUES(${title}, ${writer}, ${context}, now())`;
  // connection.query(sql, (err, result, field) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(500).send('Internal Server Error');
  //   }
  //   res.redirect('/board');
  // });
});