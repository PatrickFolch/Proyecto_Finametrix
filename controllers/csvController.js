const Controller = require('./controller');
const CheckDataService = require('../services/checkDataService')
let SaveDataController = require('./saveDataController')

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
            
        let saveDataController = new SaveDataController()
        saveDataController.saveDataVl(datas.objetoCo)
            //correctas
        this.res.json(datas)
    })
    
  }   

}

module.exports =CsvController;