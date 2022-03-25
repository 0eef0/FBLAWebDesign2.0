const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('./pages/index');
});
app.get('/about', (req, res) => {
    res.render('./pages/about');
});
app.get('/games', (req, res) => {
    res.render('./pages/games');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});