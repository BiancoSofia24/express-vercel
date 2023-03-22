const express = require('express');
const app = express();
const port = 5000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.send('Project express-vercel');
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});