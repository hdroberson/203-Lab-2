var express = require('express');
var app = express();
var anotherSite = 'http://www.cnn.com/';


function handleRedirect(req, res) {
  var targetUrl = anotherSite + req.originalUrl;
  res.redirect(targetUrl);
}

app.get('*', handleRedirect);

app.listen(3000, () => console.log('Server ready on: localhost:3000')) 


