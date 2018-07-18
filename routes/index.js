var express = require('express');
var router = express.Router();
const UploadService=require('../service/uploadService')

let uploadService=new UploadService;
let upload=uploadService.up()
/*const storage= Multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'public/images');
  },
  filename:(req,file,cb)=>{
    cb(null, file.originalname);
  }
});

const Upload = Multer({storage})*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Finametrix' });
});

router.post('/upload',upload.single('file'),(req,res,next)=>{
  res.json(req.file)
})
module.exports = router;
