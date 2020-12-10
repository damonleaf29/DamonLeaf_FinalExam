
var express = require('express'); //Ensure our express framework has been added
var app = express();

var bodyParser = require('body-parser'); //Ensure our body-parser tool has been added
app.use(bodyParser.json());              // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var pgp = require('pg-promise')();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));


app.get('/', function(req, res) {
    res.render('pages/main',{
        my_title:"Home Page"
    });
});

app.get('/reviews', function(req, res) {
    res.render('pages/reviews',{
        my_title:"Reviews Page"
    });
});



app.listen(3000);
console.log('Server is running');