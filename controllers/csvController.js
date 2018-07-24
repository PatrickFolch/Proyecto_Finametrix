const Controller = require('./controller');
const CheckDataService = require('../services/checkDataService')

class CsvController extends Controller
{
    constructor(req,res,next){
        super(req,res,next)
        }

    index(data, cabecera){
        //console.log("cabeceracsvController"+cabecera);
        let checkDataService = new CheckDataService(data,cabecera);
        checkDataService.checkData()
        .then(datas=>{
        this.res.json(datas)
    })
    
  }   

}

module.exports =CsvController;