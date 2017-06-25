var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.get('/', (req, res) => {
    res.send('this is the express string');
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    console.log("query string is: ",req.query );
    res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, (req, res) => {
    console.log("query string is: ",req.query );
    res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', (req, res) =>{
     //default location is views folder
     var data = {age: 20, job: 'student'};
    res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000);
