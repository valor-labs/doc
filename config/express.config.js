var express = require('express');
var favicon = require('static-favicon');
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(favicon());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(express.static(process.cwd() + '/public'));
};
