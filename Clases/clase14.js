var nicolas = {
  nombre: 'Nicolas',
  apellido: 'Miranda',
  edad: 30,
  peso: 75
}

console.log(`Al inicio del año ${nicolas.nombre} pesa ${nicolas.peso}kg`)

// function aumentarDePeso (persona) {
//   return persona.peso += 200
// }
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = nicolas.peso - 3
var dias = 0

while (nicolas.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(nicolas)
  }
  if (realizaDeporte()) {
    adelgazar(nicolas)
  }
  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${nicolas.nombre} adelgazó 3kg`)
