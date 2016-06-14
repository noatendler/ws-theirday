var express=require('express');
var app = express();
var activityFunc = require('./controller/activityController');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartAction = multipart();
var user = require('./controller/user');
var party = require('./controller/party');
var cookieParser = require('cookie-parser');
var themes = require('./controller/themesController');
var frozen=require('./controller/frozenController');


app.use(cookieParser());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('port', port);

app.use('/showActivity', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/addActivity', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});


app.use('/frozen', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/addParty', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/showThemes', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});




app.get('/activities', activityFunc.getData);
app.get('/themes', themes.getData);
app.post('/upload',multipartAction,activityFunc.saveData);
app.post('/user',user.saveData);
app.post('/party',multipartAction,party.saveData);
app.get('/party',party.getData);
app.get('/frozen',frozen.getData);

app.listen(port);