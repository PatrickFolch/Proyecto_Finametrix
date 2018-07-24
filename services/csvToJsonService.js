const csvtojsonV2=require("csvtojson/v2");
const csv=require('csvtojson')

    class csvToJsonService{
   
        constructor(csvFilePath){
            this.csvFilePath=csvFilePath; 
         }
    
    csvTojson(){
            return new Promise((resolve,reject)=>{
                csv({delimiter:[";"],noheader:true,})
                .fromFile(this.csvFilePath)
                .then((jsonObj)=>{
                    let cabecera= 0;

                    for(let i=0; i<jsonObj.length;i++){
                        if(jsonObj[i].field1 == 'VA'){
                        cabecera++;
                      }     
                    }
                    //console.log("lineas de cabecera:"+ cabecera);
                    jsonObj.lcabeceras = cabecera;
                    resolve(jsonObj);
                    
                })
                .catch((err)=>{
                    console.error(err);
                    reject(err)
                });
                
                
            })
    
        }

}
module.exports = csvToJsonService;