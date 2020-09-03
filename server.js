var express = require('express');
var app = module.exports = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/iphone', function(req, res){
  res.render('iphone');
});

if(!module.parent){
  app.listen(process.env.PORT || 3000, function(){
    console.log('up and running localhost:3000');
  });
}

module.exports = function(app){

}