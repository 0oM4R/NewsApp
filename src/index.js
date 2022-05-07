const express = require('express');
const app = express();

const path = require('path');
const publicDir = path.join(__dirname, '../public')
const news=require('./controllers/news')

const hbs =require('hbs');
app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname, '../template/views')
app.set('views', viewsPath);
app.get('/',(req, res) =>{
    res.send("welcome, to get the news go to /news page")
})
app.get('/news',(req, res) =>{
    news('egypt',(err, data) =>{
        
        if(data){
            res.render('index',{data:data});
        }else if(err){
            res.status(401).send(err);
        }
    })
   
})
app.listen(3000,()=>{
    console.log('run on http://localhost:3000')
})