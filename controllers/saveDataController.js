let Controller = require('./controller')
let modelVa = require('../models/modelVA')
let modelVl = require('../models/modelVL')

class SaveDataController extends Controller{
    constructor(req,res,next){
        super(req,res,next)
    }

saveDataVa(VA){
    modelVa.collection.insert(VA, (error, DOC)=>{
        if(error){
            console.error(error);
            
        }
    })
    }

    saveDataVl(VL){
        modelVl.collection.insert(VL, (error, DOC)=>{
            if(error){
                console.error(error);
                
            }
        })
        }
}


module.exports= SaveDataController;