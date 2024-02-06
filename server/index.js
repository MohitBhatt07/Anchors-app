const express = require('express');
const app = express();

const PORT = 7000;
app.get('/', (req, res) => {
  res.send('App is running');
});

app.listen(PORT, ()=>console.log(`Server running at ${PORT}`));