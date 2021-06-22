const EXPRESS = require('express');
const PATH = require('path');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const APIURL = 'https://countapi.xyz/'
const KEY = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e' //Note: this is not a secret

const APP = EXPRESS()

const distPath = PATH.join(__dirname, '/');
APP.use(bodyParser.json());

APP.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

APP.get('/', (req, res) => {
  res.sendFile(distPath  + './dist/index.html');
})