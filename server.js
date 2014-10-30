var express = require('express');
var database = require('./liardatabase');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var thing = 'thiug';
var app = express();


//CONNECTION
var connection = new Sequelize('calcWatches', 'root', null, 
  {
    host: 'localhost'
  }
);

// MODEL
var Watch = connection.define('watch', {
  color: Sequelize.STRING,
  price: Sequelize.FLOAT,
  brand: Sequelize.STRING
})


// ENDPOINT
app.get('/watches', function(req, res) {
  Watch.all().then(function(data) {
    res.send(data);
  });
});

try {
  connection.sync();
}

catch(err) {
 console.log('database error:' + err);
}


app.listen(3000);



























