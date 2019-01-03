const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');


let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/review', (req, res) => {
  db.save(req.body);
  res.send('data has been sent from server to database')
});

let port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


