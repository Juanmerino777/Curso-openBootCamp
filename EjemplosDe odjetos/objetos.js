// OBJETOS EN JAVASCRIPT
//para crear un objeto primero  declaramos una bariable seguido del signo igual y entre llaves {} colocamos las propiedades 
//las propiedades de los objetos pueden ser de diferentes tipos de datos (Strings,buleanos,arreglos,numeros y mas...)
//las propiedades: se coloca el nombre seguido de dos puntos y el valor separando las propiedades por una coma

//hay dos formas de acceder a sus propiedades la primera es por puntos y la otra es por medio de corchetes [] la diferencia es que con los corchetes podemos acceder a propiedades que tengan espacios en ella 

//Ejemplo con el punto:
let frutas = {
  nombre: 'manzana',
  Cantidad: 200,
  Propiedades: ['dulce', 'roja']
}
// al imprimir podemos colocar el nombre del objeto seguido de un punto y el nombre de la propiedad
//tambien podemos remplazar el punto por corchetes

console.log(frutas);
console.log(frutas.nombre);
console.log(frutas.Cantidad);
console.log(frutas.Propiedades)

//agregar una propiedad
//solo vasta colocar el nombre del objjeto seguido del punto y la nueva propiedad
frutas.ventas = 100;
console.log(frutas);

//eliminar una propiedad
//colocamos la palabra clave delete declarando el objeto con la propiedad a eliminar
delete frutas.Propiedades;
console.log(frutas);

//consulta dce propiedades 
//dentro de un console colocamos el nombre del objeto seguido de un punto y la palabra hasOwnProperty y entre parentecis el nombre de la propiedad a consultar
//si la propiedad existe nos respondera con un boleano (true, false)
console.log(frutas.hasOwnProperty('Cantidad'))

// tambien podemos tener objetos dentro e otros objetos 
let familia = {
  juan: 'cabeza de familia',
  geycell:{
    edad:28,
    estatura:160,
    color: 'trigueña'
  },
  'said andres':{
    edad: 5,
    estatura: 75,
    color: 'blanco'
  },
  felipe:{
    edad:4,
    estatura: 50,
    color: 'trigueño'
  }
}
//consulta general 
console.log(familia);

//consulta por punto
console.log(familia.geycell);
console.log(familia.felipe);

//consulta por medio de corchetes[]
console.log(familia['said andres']);

//objetos con el metodo constructor
// para crear un objeto con un constructor primero creamos una funcion con la primera letra en mayuscula y entre parentecis las propiedades que deseamos que tenga el odjeto y entre llaves declaramos la palabra clave (THIS) seguida de un punto y el nombre de la propiedad que queremos crear y asi se debe hacer con cada una de las propiedades que deseemos crear separandola con punto y coma 
function Familia2(nombre, edad, tamaño){
  this.nombre = nombre;
  this.edad = edad;
  this.tamaño = tamaño;
}
//llamada del objeto 
// se declara una bariable seguida del signo igual y la palabra clave (NEW) y se llama el nombre del constructor comn sus argumentos  e imprimimos en consola

let casa = new Familia2('geycell ayazo', 28, 160);
console.log(casa);

// asi podemos llamar la funcion (constructor) las veces que sea necesario 
let casa2 = new Familia2('geycellll', 456, 655);
console.log(casa2);