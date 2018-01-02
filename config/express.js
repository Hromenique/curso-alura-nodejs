var express = require('express');
var app = express();
app.set('view engine', 'ejs');

module.exports = function(){   
    return app;
}


