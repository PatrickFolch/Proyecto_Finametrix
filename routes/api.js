var express = require('express');
var router = express.Router();
let ApiFindDataController = require('../controllers/api/apiFindDataController')
let CalcRentService = require('../services/calcRentService')
let CalcVolService = require('../services/calcVolService')


router.get('/performance', function(req, res, next) {
  let apiFindDataController = new ApiFindDataController(req, res, next);
  console.log('entra en api'+req.query.isin)
  apiFindDataController.findData()
  
    .then((data)=>{
      let result =  {}
      let calcRentService = new CalcRentService(data);
      result.rentabilidad = calcRentService.calcRent(req.query.dateFrom, req.query.dateTo);
      
      let calcVolService = new CalcVolService(data)
      result.volatibilidad = calcVolService.calcVol(req.query.dateFrom, req.query.dateTo);
      res.json(result)
    })
    .catch((e)=>console.error(e))
 
});

module.exports = router;
