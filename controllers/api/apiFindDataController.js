let Controller = require ('../controller')
let ModelVl = require ('../../models/modelVL')

class ApiFindDataController extends Controller{
    constructor(req,res,next){
        super(req,res,next)
    }
    findData(){
        console.log(this.req.query.isin)
        return new Promise((resolve, reject)=>{
        ModelVl.find({field2: this.req.query.isin}, (err, data)=>{
            if(err){
                console.error(err)
                
            }
            resolve(data)
            reject('error')
        })
       
    })
    }
}

module.exports=ApiFindDataController;