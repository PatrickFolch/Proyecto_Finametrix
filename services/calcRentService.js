class CalcRentService{
    constructor(data,isin){
        this.jsonObject=data;

    }
    calcRent(finicio, ffin){
            
        let lineas = JSON.parse(JSON.stringify(this.jsonObject));
                let rentavilidad=0.0;
               let precioinicio = 0;
               let preciofin = 0;
               let number = 0 
                for (let i=0; i<lineas.length; i++)
                { number = parseFloat(lineas[i].field4)
                    if (lineas[i].field3==finicio){
                        precioinicio +=number
                    }
                    if (lineas[i].field3==ffin){
                        preciofin +=number
                    }
                }
         
                
                precioinicio= lineas[0].field4;
                preciofin=number
                //console.log('precio fin '+PrecioFin);
                
                //console.log('precio inicio '+PrecioInicio);
                console.log(preciofin)
                console.log(precioinicio)
                 rentavilidad = (preciofin - precioinicio)/precioinicio
                 console.log('esta es la rentavilidad '+rentavilidad)
                 return rentavilidad;
                console.log('total '+(preciofin - precioinicio)/precioinicio);
                
                
        };
};

module.exports=CalcRentService;