//switch:
/*creamos la variable con su valor despues 
la palablra clave switch y entre  parentercis la variable despues
entre corchetes creamos los diferentes casos a cumplir con la palabra CASE creamos el caso seguido de (:) e imprimimos.
es nesesario colocar la plalabra clave BREAK  al finaliza para que solo imprima el resultado que se cumpla */


var estacion = "otoño";
switch(estacion) {
  case "otoño":
  console.log("estamos en otoño");
  break;
  case "verano":
  console.log("estamos en verano");
  break;
  case "invierno":
  console.log("estamos en invierno");
  break;
  case "primavera":
  console.log("estamos en primavera");
  break;
  default:
    console.log("no es  estacion");
}