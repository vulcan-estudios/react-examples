const express = require('express');
const path = require('path');
const database = require('server/database');

const app = express();
const port = process.env.PORT || 8400;

app.get('/api/users', (req, res) => res.json(database.users));

app.use(express.static(path.join(process.cwd(), '/public')));

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server running at http://0.0.0.0:${port}`);
});
