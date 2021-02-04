
const express = require('express');

const app = express();


app.use(express.static('./dist/router-experements'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/router-experements/'}),
);

app.listen(process.env.PORT || 8080);
