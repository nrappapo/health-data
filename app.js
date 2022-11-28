const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/static')));
app.get('/', function (request, response) {
        response.send('Hello World');
});

app.listen(80, function () {
        console.log('Listening on port 80');
});