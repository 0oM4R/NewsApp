const request = require('request')

    const q='egypt'
    let date_ob =Date.now();
    let date
   
    const apiKey='95ad09f674254298a9ab555b7e5d70d7'
 const news = (q,callback) =>{
    const url =`https://newsapi.org/v2/everything?q=${q}&from=2021-12-13&sortBy=popularity&apiKey=${apiKey}`
    request({url,json:true},function(err,res){
        if(!err&&res.body.status=='ok'){
            callback(undefined,res.body.articles)
        }else{
            callback(err,undefined)
        }
    })
}
module.exports= news