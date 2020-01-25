var Nicolas = {
    nombre: 'Nicolas',
    apellido: 'Miranda',
    edad: 28
  }
  
  var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
  }
  
  function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
  }
  
  imprimirNombreEnMayusculas(Nicolas)
  imprimirNombreEnMayusculas(dario)
  // imprimirNombreEnMayusculas({ nombre: 'Pepito' })
  // imprimirNombreEnMayusculas({ apellido: 'Gomez' })
  
  function cumpleanos(persona) {
    return {
      ...persona,
      edad: persona.edad + 1
    }
  }