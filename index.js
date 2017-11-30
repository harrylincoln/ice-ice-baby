const express = require('express');
const bodyParser = require('body-parser');

// routing
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./routes/endpoints')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
