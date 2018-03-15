var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

var server = app.listen(8088, function() {
  var port = server.address().port;
  console.log('server is listening at port: ' + port);
});