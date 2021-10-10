const express = require('express')
const path = require('path')
const unirest = require('unirest');
const PORT = process.env.PORT || 5000
var bodyParser = require('body-parser');

const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlcoded({
  extended: true
}));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
app.listen(PORT, () => console.log('Listening on ${ PORT }'))

app.get('/get_weather', function(req, resp) {
  var unirest = require('unirest');
  var req = unirest('GET', 'https://api.lil.software/weather?latitude=40.709335&longitude=-73.956558')
  .end(function (res) {
    if (res.error) throw new Error(res.error);
    console.log(res.raw_body);
    resp.send(res.raw_body)
  });
})
