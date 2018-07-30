const Mongoose = require('mongoose');

module.exports = function connect ()
{
    Mongoose.connect('mongodb://localhost:27017/ProjectFinametrix',  {useNewUrlParser: true },
    (error)=>{
    if(error){
      console.error(error)

    }else{
      console.log("Entra");

    }  
        
    })
}