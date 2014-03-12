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

var user = require('./data/user.json');
app.get('/user', function(req, res) {
  res.json(user);
});

var users = require('./data/users.json');
app.get('/user/:username', function(req, res) {
  var username = req.params.username;
  if (users[username]) res.json(users[username]);
  else res.send(404, "User " + username + " not found.");
});

app.use(function(req, res, next) {
  res.send(404, 'Page not found!!!');
})

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});
