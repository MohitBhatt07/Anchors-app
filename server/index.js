const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectToMongoDB = require('./connect');

const PORT = 7000;
dotenv.config();
connectToMongoDB();
app.get('/', (req, res) => {
  res.send('App is running');
});

app.listen(PORT, ()=>console.log(`Server running at ${PORT}`));