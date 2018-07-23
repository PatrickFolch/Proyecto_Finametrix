var express = require('express');
var router = express.Router();
const UploadService = require('../services/uploadService')
const CsvTojsonService = require('../services/csvToJsonService')
//const CsvController = require('../controllers/csvController')
//const CsvColumnService = require('../services/csvColumnService')
const CheckDataService= require('../services/checkDataService')

let uploadService=new UploadService;
let upload=uploadService.up()


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Finametrix' });
});

router.post('/upload',upload.single('file'),(req,res,next)=>{
  let csvTojsonService = new CsvTojsonService(req.file.path)
  csvTojsonService.csvTojson()
  .then((data)=>{
    res.json(data);
    });
   
  });
  
module.exports = router;
