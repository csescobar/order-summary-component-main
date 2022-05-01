const express = require('express');

const app = express();

port = process.env.PORT || 3000;

app.use(express.static('.'));
app.listen(port);

