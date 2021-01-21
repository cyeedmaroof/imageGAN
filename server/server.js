// import dependencies and initialize express
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const healthRoutes = require('./routes/health-route');
const swaggerRoutes = require('./routes/swagger-route');

const app = express();

// enable parsing of http request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/isr', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'ind.html'));
 });

app.get('/styltrf', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'styletran.html'));
 });
 
 app.get('/capt', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'caption-style.html'));
 });
 
// default path to serve up index.html (single page application)
//app.all('', (req, res) => {
//  res.status(200).sendFile(path.join(__dirname, '../public', 'index.html'));
//});

// start node server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App UI available http://localhost:${port}`);
  console.log(`Swagger UI available http://localhost:${port}/swagger/api-docs`);
});


module.exports = app;
