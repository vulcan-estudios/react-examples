const express = require('express');
const bodyParser = require('body-parser');
const MDB = require('prhone-mdb');

const port = process.env.PORT || 4000;
const database = 'server/database.json';
const app = express();
const dbms = new MDB(process.cwd() + '/' + database);

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${process.cwd()}/public`));

// Endpoint: conseguir todos los animes
app.get('/api/animes', (req, res) => {
  dbms.getAll('animes').then(animes => res.json(animes));
});

// Endpoint: crear nuevo anime
app.post('/api/animes', (req, res) => {
  const newAnime = req.body;
  dbms.create('animes', newAnime).then(anime => res.json(anime));
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server running at http://127.0.0.1:${port}`);
});
