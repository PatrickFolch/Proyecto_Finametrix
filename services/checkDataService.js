class checkDataService
{
    constructor(data, cabecera)
    {
        // console.log("Cabeceraconstructor->"+cabecera);
        this.cabecera = cabecera;
        this.jsonObject = data;
    }
    checkData(){
        let lineas = this.jsonObject;


        return new Promise((resolve,reject)=>{
            let correctas=[];
            let errores=[];
            console.log(lineas.length);
            console.log("cabecera ->"+ this.cabecera);
            
            for (let i=this.cabecera; i<lineas.length; i++)
            {
                var fecha = /^(?:(?:(?:(?:(?:[13579][26]|[2468][048])00)|(?:[0-9]{2}(?:(?:[13579][26])|(?:[2468][048]|0[48]))))(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:0[1-9]|1[0-9]|2[0-9]))))|(?:[0-9]{4}(?:(?:(?:09|04|06|11)(?:0[1-9]|1[0-9]|2[0-9]|30))|(?:(?:01|03|05|07|08|10|12)(?:0[1-9]|1[0-9]|2[0-9]|3[01]))|(?:02(?:[01][0-9]|2[0-8])))))$/;
                var precio=/^[0-9]{1,}(\,[0-9]{1,})?$/;

                
                
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
                    correctas.push(lineas[i])
                }
                
            }
            console.log(typeof(correctas))
            resolve({
            "resultado": "ok",
            "totalelementos":this.jsonObject.length,
            "nCorrectos":correctas.length,
            "elementoserroneos":errores,
            "objetoCo": correctas
        });
            reject('error');
        })
    }
}
module.exports= checkDataService;