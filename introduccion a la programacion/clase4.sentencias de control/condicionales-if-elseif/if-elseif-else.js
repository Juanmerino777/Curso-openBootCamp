//condicional if:
//eje 1:
/*creamos la variable con su valor y decimos 
if(si) entre parentecis colocamos la condicion a cumplir y 
entre corchetes imprimimos el resultado si la condicion se cumple */

/*los (else if) y (else) son obcionales ya que podemos realizar las condiciones mas cortas y directas  solo con el (if) diciendo que si el valor de la variable es la comparacion del if entonces realize la accion y si no pues solo se pierde el codigo y no pasa nada*/

var numeroIf = 10;

if (numeroIf > 0) {
  console.log("El numero es positivo");
}else if (numeroIf < 0) {
  console.log("El numero es negativo");
}else {
  console.log(" El numero es 0");
}

//eje2:

var estacion = "primavera";

if (estacion == "otoño")  {
  console.log("la estacion es: " + estacion);
}else  if (estacion == "invierno")  {
  console.log("la estacion es: " + estacion);
}else if (estacion == "primavera") {
  console.log("la estacion es: " + estacion)
}else {
  console.log("es otra estacion");
}
