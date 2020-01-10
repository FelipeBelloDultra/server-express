// Instance modules
const express = require('express');
const path = require('path');
const ejs = require('ejs');
// Instance routes
const routes = require('./routes');

// Instance express
const app = express();
// Instance port
const port = 3000;

// Configure views and ejs to html
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

// Run server and listen port 3000
app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
  console.log('Press CRTL+C to STOP server!');
});

// Using routes with app
app.use(routes);
