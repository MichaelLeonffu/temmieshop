var express = require('express');
var app = express();

//app.get('/', function (req, res) {
//  res.send(index.html);
//});

app.use(express.static('public'));

app.listen(13409, function () {
  console.log('Example app listening on port 13409!');
});