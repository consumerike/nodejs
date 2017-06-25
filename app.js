var express = require('express');
app.set('view engine', 'ejs');

var app = express();
app.get('/', (req, res) => {
    res.send('this is the express string');
});

app.get('/contact', (req, res) => {
    res.send('this is the contact page..');
});

app.get('/profile/:name', (req, res) =>{
     //default location is views folder
     var data = {age: 20, job: 'student'};
    res.render('profile', {person: req.params.name, data: data});
})

app.listen(3000);
