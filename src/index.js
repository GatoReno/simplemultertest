const express = require('express');
const path = require('path');
const multer = require('multer');


//init
const app = express();

//middle
app.use(multer({
    dest: path.join(__dirname,'public/uploads')
}).any('img'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//routes
app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/img',(req,res)=>{
    console.log(req.body);
    console.log(req.files);
});
app.set('port',4000);
app.listen(app.get('port'),()=>{
    console.log( `Corriendo en serv:  ${app.get('port')}`);
});