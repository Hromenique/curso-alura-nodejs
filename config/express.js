var express = require('express');
var load = require('express-load');
var bodyParse = require('body-parser');

module.exports = function () {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParse.urlencoded({ extended: true }));
    app.use(bodyParse.json());

    load('routes', { cwd: 'app' })
        .then('infra')
        .into(app);

    return app;
}


