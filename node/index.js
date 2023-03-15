const express = require('express');
const app = express()
// const http2 = require('spdy')

const cookieParser = require('cookie-parser')
app.listen(3005, (res) => {
    console.log(res)
})
app.use(cookieParser('lxyScert'));
var session =require('express-session')
app.use(session(
    {
   
      secret:"lxyScert",//与cookieParser 的值要一样
      cookie:{maxAge:5000},//作用时间 单位毫秒 5000就是5秒
    rolling:true,//只要操作有响应 就会刷新这个时间 不然会总断
    resave: false, //添加 resave 选项
    saveUninitialized: true //添加 saveUninitialized 选项
    }))

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://127.0.0.1:5500');
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    // res.setHeader('Expires',new Date(Date.now()+10*1000).toGMTString())
    res.setHeader('Cache-Control', 'max-age=10000')
    res.cookie('username', 'xiaoli', {
        maxAge: 3600000, httpOnly: true
    });
    req.session.is_login=true;

    res.send('ok'); if (req.method == "OPTIONS") res.send(200);
    else next();
});
app.get('/pa', (req, res) => {

    res.send('hello world');
})

app.post('/sub', (req, res) => {
    console.log(req.params)
    res.send('666')
})

app.get('gt', (req, res) => {
    res.send('123')
})