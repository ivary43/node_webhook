const  express = require('express');
const body_parser = require('body-parser');
const logger = require('morgan');
const listenPort = process.env.PORT  || 3000 ;
//var ps = require('python-shell');

let app = express();
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.post("/", (req, res)=> {
    // let options = {
    //     mode: 'text',
    //     pythonPath: '/usr/local/bin/python3',
    //     args: ['tv']
    //   };
    // ps.PythonShell.run('fl.py', options, function (err, results) { 
    //     console.log(results)
    // });
    // console.log(req.body);
    // res.send(JSON.stringify(req.body.queryResult.parameters));
    data = [{"name": "Redmi Note 6 Pro (Black, 64 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "13,999", "rating": "4.5"}, {"name": "Realme C1 (Mirror Black, 16 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "7,499", "rating": "4.5"}, {"name": "Realme C1 (Navy Blue, 16 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "7,499", "rating": "4.5"}, {"name": "Motorola One Power (Black, 64 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "14,999", "rating": "4.4"}, {"name": "Redmi Note 6 Pro (Blue, 64 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "13,999", "rating": "4.5"}, {"name": "Honor 9N (Midnight Black, 32 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "9,999", "rating": "4.4"}, {"name": "Redmi Note 6 Pro (Rose Gold, 64 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "13,999", "rating": "4.5"}, {"name": "Redmi Note 6 Pro (Red, 64 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "13,999", "rating": "4.5"}, {"name": "Redmi Note 6 Pro (Black, 64 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "15,999", "rating": "4.5"}, {"name": "Redmi 6 (Black, 32 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "8,499", "rating": "4.4"}, {"name": "Honor 9N (Sapphire Blue, 32 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "9,999", "rating": "4.4"}, {"name": "Honor 9N (Midnight Black, 64 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "11,999", "rating": "4.3"}, {"name": "Honor 9N (Sapphire Blue, 64 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "11,999", "rating": "4.3"}, {"name": "Samsung Galaxy A9 (Bubblegum Pink, 128 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "36,990", "rating": "4.5"}, {"name": "Honor 7S (Black, 16 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "5,999", "rating": "4.1"}, {"name": "Honor 7S (Blue, 16 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "5,999", "rating": "4.1"}, {"name": "Redmi 6 (Rose Gold, 32 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "8,499", "rating": "4.4"}, {"name": "Honor 7A (Black, 32 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "7,999", "rating": "4.2"}, {"name": "Honor 7A (Gold, 32 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "7,999", "rating": "4.2"}, {"name": "Samsung Galaxy A9 (Caviar Black, 128 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "39,990", "rating": "4.5"}, {"name": "Honor 7S (Gold, 16 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "5,999", "rating": "4.1"}, {"name": "Redmi Note 6 Pro (Blue, 64 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "15,999", "rating": "4.5"}, {"name": "Apple iPhone 6s (Space Grey, 32 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "24,999", "rating": "4.5"}, {"name": "Samsung Galaxy A9 (Lemonade Blue, 128 GB)", "url": "//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/placeholder_9951d0.svg", "price": "39,990", "rating": "4.5"}]
    res.send(JSON.stringify({
        "buttons": [
          {
            "postback": "Card Link URL or text",
            "text": "Card Link Title"
          }
        ],
        "imageUrl": "http://urltoimage.com",
        "platform": "facebook",
        "subtitle": "Card Subtitle",
        "title": "Card Title",
        "type": 1
      }));
}) 

//server setup
app.listen(listenPort, ()=>{
    console.log('The server is running at :', listenPort);
});
