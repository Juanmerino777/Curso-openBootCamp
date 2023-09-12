
// primera parte
 // Función para sumar tres números
function sumarNumeros(num1, num2, num3) {
  return num1 + num2 + num3;
}

// Llamada a la función sumarNumeros en el main
function main() {
  var resultado = sumarNumeros(8, 100, 140);
  console.log("El resultado de la del codigo es: " + resultado);
}


// segunda parte=

main();

// Clase Coche
class Coche {
  constructor() {
    this.numPuertas = 0;
  }

  // Función para incrementar el número de puertas
  incrementarPuertas() {
    this.numPuertas++;
  }
}

// Crear un objeto miCoche y añadirle una puerta
var miCoche = new Coche();
miCoche.incrementarPuertas();

// Mostrar el número de puertas del objeto miCoche
console.log("El coche tiene " + miCoche.numPuertas + " puerta(s).");


//--------------------------