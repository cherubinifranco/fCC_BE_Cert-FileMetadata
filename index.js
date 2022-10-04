var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

// --------------------------- File Middleware --------------------------- //

const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

// --------------------------- APIs Calls--------------------------- //

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), fileanalyse);


// --------------------------- Main ---------------------------//

function fileanalyse(req, res){
  let responseObj = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  }
  res.json(responseObj)
}

















// --------------------------- Listener ---------------------------//
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
