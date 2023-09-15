// Imports
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
// app.engine(ext, callback);

// Static Files
app.use(express.static('./public/images'));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {text: 'This is EJS'});
});
app.get('/about', (req, res) => {
    res.render('about', {text: 'About Page'});
});
app.get('/contact', (req, res) => {
    res.render('contact', {text: 'Contact Page'});
});
app.get('/pricing', (req, res) => {
    res.render('pricing', {text: 'Pricing Page'});
});
app.get('/team', (req, res) => {
    res.render('team', {text: 'Team Page'});
});
app.get('/work', (req, res) => {
    res.render('work', {text: 'Work Page'});
});

app.listen(port, () => {
    console.log('Server/App is running at', port);
});