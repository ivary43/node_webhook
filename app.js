const  express = require('express');
const body_parser = require('body-parser');
const logger = require('morgan');
const listenPort = process.env.PORT  || 3000 ;

let app = express();
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.post("/", (req, res)=> {
    console.log(req.body);
    res.send("Ok");
}) 

//server setup
app.listen(listenPort, ()=>{
    console.log('The server is running at :', listenPort);
});
