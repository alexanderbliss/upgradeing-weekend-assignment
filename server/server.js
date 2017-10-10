var express = require('express');

var app = express();

var port = 7000;

app.use(express.static('server/public'));

app.listen(port, function(){
    console.log('listening on port', port);
})