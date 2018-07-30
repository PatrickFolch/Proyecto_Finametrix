class CalcVolService {
    constructor(data,isin) {
        this.jsonObject = data;

        //console.log('Values'+this.jsonObject);
    }
    calcVol(finicio, ffin) {

        
        let lineas = JSON.parse(JSON.stringify(this.jsonObject));
        let values = [];

        for (let i = 0; i < lineas.length; i++) {
            if (lineas[i].field3>=finicio && lineas[i].field3<=ffin){
            values.push(parseFloat(lineas[i].field4.replace(',', '.')));
            }
        }

        // console.log(values);

        let sum = values.reduce((previous, current) => current += previous);
        let media = parseFloat(sum / values.length);
        // console.log('Media '+media);

        let varianza = values.reduce((total, current) => {

            return Math.pow((parseFloat(current) - media), 2)
        });
        //let varianza = Math.pow(media - parseFloat(lineas[i].field4),2);                                                         
        console.log('Varianza ->'+ varianza);
        let varianzaTotal = varianza / (values.length - 1);
        console.log('VT '+varianzaTotal);
        let volatilidad = Math.sqrt(varianzaTotal);
        console.log('VOLATILIDAD->'+volatilidad);
        return volatilidad;
        
    }
}

module.exports = CalcVolService;