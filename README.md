# Proyecto_Finametrix
# Reto Finametrix



A continuación se presenta el reto planteado por Finametrix para su resolución por parte del Bootcamp llevado a cabo por Geekshub y patrocinado 
por Finametrix.




## Descripción del problema



La Gestora de Fondos de Inversión "Finafunds Value" quiere publicar en su web pública la rentabilidad de sus fondos de inversión. 
Su web pública está desarrollada en Wordpress y la empresa que se encarga de la web no tiene los conocimientos financieros
 
para calcular ese dato y poder mostrarlo, por ello, "Finafunds Value" encarga a Finametrix el desarrollo de un web service que 
permita calcular la rentabilidad de un fondo en un periodo de tiempo dado.


Para que Finametrix disponga de información actualizada, "Finafunds Value" proporcionará un fichero diario en formato CSV 
con la información de los fondos y los precios históricos.
Dada la criticidad de los datos a mostrar a los inversores es importante 
que el proceso de carga de datos informe a su finalización del resultado de la carga indicando al menos registros procesados 
y errores encontrados.




## Especificación del fichero



El fichero tiene dos posibles tipos de registros: VA y VL.
 
Los registros VA representan los registros con información de los fondos de inversión, y su especificación es la siguientes:


| Campo | Descripción |
| ------ | ------ |
| Tipo registro | VA |
| ISIN | Identificador ISIN del fondo (único por fondo) |
| Nombre | Nombre del fondo de inversión |

| Divisa | Divisa de denominación del instrumento |
| Familia | Familia del fondo de inversión |


Los registros VL representan los registros con información 
de precios, y su especificación es la siguiente:

| Campo | Descripción |
| ------ | ------ |
| Tipo registro | VL |
| ISIN | Identificador ISIN del fondo (único por fondo) |

| Fecha | Fecha del precio en formato YYYYMMDD |
| Precio | Precio del instrumento |




## Web service cálculo de rentabilidad


El web service a desarrollar es un GET a la URL 
```/api/performance?isin=&dateFrom=&dateTo=``` y el resultado es un objeto con dos propiedades:


* performance: rentabilidad del producto en el periodo
* volatility: volatilidad del producto en el periodo


Los parámetros a pasar por URL son:
* isin: idenficador ISIN del fondo
* dateFrom: fecha desde en formato YYYYMMDD
* dateTo: fecha hasta en formato YYYYMMDD




## Cálculo de rentabilidad


El cálculo de rentabilidad de un producto se calcula como la diferencia entre el precio a la fecha de fin menos el precio a la fecha de inicio dividido entre 
la fecha de inicio:```(precioFin - precioInicio) / precioInicio```




## Cálculo de volatilidad



El cálculo de volatilidad de un producto se calcula como la desviación estándar de los precios en el periodo.



Vamos a entender esta fórmula.


Para calcular la volatilidad:

* Lo primero que tenemos que hacer es calcular la media de los precios (r en la fórmula)

* Con la media de los precios, calculamos la varianza para cada día.
 La varianza la calculamos como el cuadrado de la diferencia entre el precio y la media.

* La varianza total sería la suma de varianzas entre el número de días (muestras) - 1.

* La desviación estándar (volatilidad) ya la podríamos calcular: es la raíz cuadrada de la varianza.


Imaginemos esta seria de precios para 5 días:
1
2
3
4
5


La media sería: (1 + 2 + 3 + 4 + 5) / 5 = 3


La varianza de cada día sería:
(1 - 3) ^ 2 = 4
(2 - 3) ^ 2 = 1
(3 - 3) ^ 2 = 0
(4 - 3) ^ 2 = 1
(5 - 3) ^ 2 = 4


La varianza total sería: (4 + 1 + 0 + 1 + 4) / 4 = 2,5


La desviación estándar (volatilidad) sería la raíz cuadrada de 2,5 = 1,581138

