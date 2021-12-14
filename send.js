const express = require('express')
var cors = require('cors');
const app = express()
const port = process.env.PORT || 3000
var bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.get('/sms', (req, res) =>
{

let plivo = require('plivo');
let client = new plivo.Client("<auth_id>", "<auth_token>");

client.messages.create(
  '18886107212',
  req.query.no1,
  req.query.text1
).then(function(message_created) {
  console.log(req.query.text1)
});
client.messages.create(
    '18886107212',
    req.query.no2,
    req.query.text2
  ).then(function(message_created) {
    console.log(message_created)
  });

  res.send("hello")
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
