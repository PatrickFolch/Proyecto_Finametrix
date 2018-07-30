class CalcRentService {
    constructor(data, isin) {
        this.jsonObject = data;

    }
    calcRent(finicio, ffin) {

        let lineas = JSON.parse(JSON.stringify(this.jsonObject));
        let rentabilidad = 0;
        let precioinicio = 0;
        let preciofin = 0;
    
        //    console.log(lineas) 
        lineas.forEach(linea => {
            if (linea.field3 >= finicio && linea.field3 <= ffin) {
                console.log(parseFloat(linea.field4.replace(',' , '.')));
                preciofin += parseFloat(linea.field4.replace(',' , '.'))
                   //console.log(linea);
                   
            }
          
        });
        //    for (let i=0; i<lineas.length; i++)
        //     { 
        //         number = parseFloat(lineas[i].field4)
        //         if (lineas[i].field3>=finicio && lineas[i].field3<=ffin){
        //             preciofin +=number
        //             console.log(number);
        //         }
        //         //if (lineas[i].field3==ffin){
        //             //preciofin +=number
        //         //}
        //     }


        precioinicio = lineas[0].field4;
        //console.log(lineas);


        //console.log('precio fin '+PrecioFin);

        //console.log('precio inicio '+PrecioInicio);
        console.log('precio fin ' + preciofin)
        console.log('precio inicio ' + precioinicio)
        rentabilidad = (preciofin - precioinicio) / precioinicio
        console.log('esta es la rentabilidad ' + rentabilidad)
        return rentabilidad;
        console.log('total ' + (preciofin - precioinicio) / precioinicio);


    };
};

module.exports = CalcRentService;