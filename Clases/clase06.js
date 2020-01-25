var nicolas = {
    nombre: 'nicolas',
    apellido: 'Lifszyc',
    edad: 28
  }
  
  var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
  }
  
  function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
  }
  
  imprimirNombreEnMayusculas(nicolas)
  imprimirNombreEnMayusculas(dario)
  // imprimirNombreEnMayusculas({ nombre: 'Pepito' })
  imprimirNombreEnMayusculas({ apellido: 'Gomez' })