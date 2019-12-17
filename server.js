const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`); 
    console.log('Press CRTL+C to STOP server!');
});
