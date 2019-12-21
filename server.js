// Instance modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');

const routes = require('./request');

// Instance express
const app = express();
// Instance port
const port = 3000;

// Configure views and ejs to html
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// Receive GET request from route /
app.get('/', (req, res) => { res.render('index') });

// Receive GET request from route /about
app.get('/about', (req, res) => { res.render('about') });

// Receive GET request from route /contact
app.get('/contact', (req, res) => { res.render('contact') });

// Run server and listen port 3000
app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`);
    console.log('Press CRTL+C to STOP server!');
});
