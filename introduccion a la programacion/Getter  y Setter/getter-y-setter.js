// Creo la clase persona
class Persona {
  constructor() {
    this._edad = 0;
    this._nombre = '';
    this._telefono = '';
  }

  // Getter y Setter para la propiedad edad
  get edad() {
    return this._edad;
  }

  set edad(valor) {
    this._edad = valor;
  }

  // Getter y Setter para la propiedad nombre
  get nombre() {
    return this._nombre;
  }

  set nombre(valor) {
    this._nombre = valor;
  }

  // Getter y Setter para la propiedad telefono
  get telefono() {
    return this._telefono;
  }

  set telefono(valor) {
    this._telefono = valor;
  }
}

// Creo un objeto persona en el main
const persona = new Persona();

// Utilizo los getters y setters para asignar valores a las propiedades
persona.edad = 28;
persona.nombre = 'Juan meriño';
persona.telefono = '3238024570';

// Muestro las propiedades en consola
console.log('Edad:', persona.edad);
console.log('Nombre:', persona.nombre);
console.log('Teléfono:', persona.telefono);
