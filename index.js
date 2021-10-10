const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')

// Rtc Examples
const appID = '404feedfd57c4ed2a3b7e3d5780c5114';
const appCertificate = 'e60e21787d5d4b1aa3d03e9869b546cb';
const channelName = 'testChannel';
const uid = 2882341273;
const account = "2882341273";
const role = RtcRole.PUBLISHER;

const expirationTimeInSeconds = 3600

const currentTimestamp = Math.floor(Date.now() / 1000)

const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

// IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);
console.log("Token With Integer Number Uid: " + tokenA);

// Build token with user account
const tokenB = RtcTokenBuilder.buildTokenWithAccount(appID, appCertificate, channelName, account, role, privilegeExpiredTs);
console.log("Token With UserAccount: " + tokenB);

/*
//WORKING CODE BELOW
const https = require("https");

https
  .get("https://api.lil.software/stocks?symbol=AAPL", resp => {
    let data = "";

    resp.on("data", chunck => {
      data += chunck;
    });

    resp.on("end", () => {
      let url = JSON.parse(data);
      console.log(url);
    });
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  });
*/

/*
const express = require('express');
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hellow world");
});

app,listen(port, () => {
  console.log('Example app is lostening on port http://localhost:$(port)');
});
*/

/*
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
*/