const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.send('<h1>Project express-vercel<h1>');
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});