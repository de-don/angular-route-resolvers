
const express = require('express');

const app = express();


app.use(express.static('./dist/router-resolvers'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/router-resolvers/'}),
);

app.listen(process.env.PORT || 8080);
