const express = require('express');
const app = express();

const routes = require('./routes')

app.use(express.json()).use(express.urlencoded({extended: true}));

app.use(express.static('public')).use('/api', routes);

app.get('/notes', (req, res) => {
  res.sendFile(__dirname + '/public/notes.html')
})

app.get('*', (req, res)=>{
  res.sendFile(__dirname + '/public/index.html')
})

module.exports = app;