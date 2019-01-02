const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

//ADDED FOR HEROKU BUILD
const path = require('path')

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


//ADDED FOR HEROKU BUILD
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/../client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'src', 'index.html', 'bundle.js'))
  })
}

app.post('/review', (req, res) => {
  db.save(req.body);
  res.send('data has been sent from server to database')
});


let port = 3000;

app.listen(process.env.PORT || port, function() {
  console.log(`listening on port ${port}`);
});

