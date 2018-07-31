class checkDataService
{
    constructor(data)
    {
        // console.log("Cabeceraconstructor->"+cabecera);
        // this.cabecera = cabecera;
        this.jsonObject = data;
    }
    checkData(){
        let lineas = this.jsonObject;


        return new Promise((resolve,reject)=>{
            let correctas=[];
            let errores=[];
            let VA=[]
            console.log(lineas.length);
        
            
            var fecha = /^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$/;
            var precio=/^[0-9]{1,}(\,[0-9]{1,})?$/;
            
            for (let i=0; i<lineas.length; i++)
            {

                if(lineas[i].field1=='VA'){
                    VA.push(lineas[i])
                } else if(lineas[i].field1=='VL'){
                
                if(fecha.test(lineas[i].field3)==false)
                {
                    errores.push({linea:i, error:"error en formato de fechas: "+lineas[i].field3})
                    // errores.push({"linea": i, "fecha":lineas[i].field3});
                }
                
                if(precio.test(lineas[i].field4)==false)
                {
                    errores.push({linea:i, error:"error en formato decimal: "+lineas[i].field4})
                    //errores.push({"linea":i, "numeros con decimales":lineas[i].field4})
                }
                else
                {
                    correctas.push({...lineas[i]})
                }
            }
                
            }
            // console.log(correctas)

            const result={
            "resultado": "ok",
            "totalelementos":this.jsonObject.length,
            "nCorrectos":correctas.length,
            "elementoserroneos":errores,
            "objetoCo": correctas,
            'cabeceras':VA
            }

            console.log('nCorrectos '+correctas.length);
            
            resolve({...result});
            reject('error');
        })
    }
}
module.exports= checkDataService;