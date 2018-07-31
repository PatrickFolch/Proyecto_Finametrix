const Controller = require('./controller');
const CheckDataService = require('../services/checkDataService')
let SaveDataController = require('./saveDataController')

class CsvController extends Controller {
    constructor(req, res, next) {
        super(req, res, next)
    }

    index(data) {
        //console.log("cabeceracsvController"+cabecera);
        let checkDataService = new CheckDataService(data);
        checkDataService.checkData()
            .then(datas => {

                let saveDataController = new SaveDataController()
                saveDataController.saveDataVl(datas.objetoCo)
                saveDataController.saveDataVa(datas.cabeceras)
                //correctas
                //this.res.json(datas)
                // console.log('aaaa' + datas.nCorrectos);
                // console.log(Object.keys(datas))

                const renderVars = {
                    title: 'Lista Errores',
                    errores: datas.elementoserroneos,
                    elemCorrectos: datas.nCorrectos,
                    elemProcesados: datas.totalelementos

                }
                this.res.render('errores', { ...renderVars
                })

            })

    }

}

module.exports = CsvController;