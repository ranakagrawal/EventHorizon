const express = require('express');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const routes = require('./routes'); 

app.use('/', routes); 

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Starting server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
