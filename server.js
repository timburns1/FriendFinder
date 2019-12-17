const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

let app = express();

let PORT = 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static('app/public'));

// require('./app/routing/apiRoutes.js')(app, path);
// require('./app/routing/htmlRoutes.js')(app, path);

app.listen(PORT, function () {
    console.log("app listening on port " + PORT);
})