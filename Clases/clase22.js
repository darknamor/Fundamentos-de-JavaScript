function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > 1.8

var nicolas = new Persona('Nicolas', 'Miranda', 1.75)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.89)

nicolas.soyAlto()
erika.soyAlto()
arturo.soyAlto()
