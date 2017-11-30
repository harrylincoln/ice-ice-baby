const express = require('express');

// routing
const app = express();

require('./routes/endpoints')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
