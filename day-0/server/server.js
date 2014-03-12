var express = require('express');
var app = express();

app.use(express.bodyParser());

app.get('/hello', function(req, res){
  res.send('Hello World');
});

app.get('/hello.json', function(req, res) {
  res.json({
    message:"Hello"
  });
});

app.use(function(req, res, next) {
  res.send(404, 'Page not found!!!');
})

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
