'use strict';

var express = require('express');
var app = express();

require('./config')(app);

app.listen(2020, function () {
    console.log('server start on port 2020 good');
});