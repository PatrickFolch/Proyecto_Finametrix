class CalcService{
    constructor(data, cabecera){
        this.cabecera= cabecera;
        this.jsonObject=data;

    }
    calcRent(){
            
                let lineas = this.jsonObject;
                let suma=0;
                
                for (let i=this.cabecera; i<lineas.length; i++)
                {
                    suma = suma + lineas[i].field4
                
                    
                }
                    
                let PrecioFin=suma;
                let PrecioInicio=field4[0];
                (PrecioFin - PrecioInicio)/PrecioInicio
                console.log(PrecioInicio);
                
        };
};

module.exports=CalcService