const  express = require('express');
const body_parser = require('body-parser');
const logger = require('morgan');
const listenPort = process.env.PORT  || 3000 ;
var ps = require('python-shell');

let app = express();
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.get("/", (req, res)=> {
    let options = {
        mode: 'text',
        args: ['tv']
      };
    ps.PythonShell.run('fl.py', options, function (err, results) { 
        console.log(results)
    });
    // console.log(req.body);
    // res.send(JSON.stringify(req.body.queryResult.parameters));
    res.send("a");
}) 

//server setup
app.listen(listenPort, ()=>{
    console.log('The server is running at :', listenPort);
});
