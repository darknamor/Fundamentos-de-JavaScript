var nicolas = {
    nombre: 'Nicolas',
    apellido: 'Miranda',
    edad: 30,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.dj) {
        console.log('DJ')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.guitarrista) {
        console.log('Gutiarrista')
    }

    if (persona.drone) {
        console.log('Piloto de drone')
    }

    if (persona.edad >= 18) {
        console.log('Es mayor de edad')
    }
}

imprimirProfesiones(nicolas)