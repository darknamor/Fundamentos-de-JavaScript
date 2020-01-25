var nicolas = {
  nombre: 'Nicolas',
  apellido: 'Miranda',
  altura: 1.75
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

const esAlta = ({ altura }) => altura > 1.8

var personas = [nicolas, alan, martin, dario, vicky, paula]
//filter devuelve un array nuevo
var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona) {
//   return persona.altura > 1.8
// })

console.log(personasAltas)
