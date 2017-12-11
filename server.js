var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
bodyParser = require('body-parser'),
path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/integratortonRoutes'); //importing route
routes(app); //register the route

//returning static index.html
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function(req,res){
     res.sendFile('index.html');
});

//Error
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('IntegratorTon server started on: ' + port);
