// Instance modules
const express = require('express');
// Instace express.Router
const routes = express.Router();

// Receive GET request from route / and redirect to /home
routes.get('/', (req, res) => res.redirect('/home'));
// Receive GET request from route /home
routes.get('/home', (req, res) => {
  res.render('index');
});
// Receive GET request from route /about
routes.get('/about', (req, res) => {
  res.render('about');
});
// Receive GET request from route /contact
routes.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = routes;
