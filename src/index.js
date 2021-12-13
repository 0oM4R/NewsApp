const express = require('express');
const app = express();

const path = require('path');
const publicDir = path.join(__dirname, '../public')
const news=require('./controllers/news')

const hbs =require('hbs');
app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname, '../template/views')
app.set('views', viewsPath);
app.get('/news',(req, res) =>{
    news('egypt',(err, data) =>{
        if(data){
            res.render('index',{data:data});
        }
    })
   
})
app.listen(3000)