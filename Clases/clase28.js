const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

var signo ;
var personaje=false;
do {
  signo = prompt('Ingresa un numero del 1 al 10')
  if(parseInt(signo)<=10){
    personaje=true;
  }
} while (personaje==false);
const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', signo)}`
const opts = { crossDomain: true }

const onPeopleResponse = function (persona) {
  console.log(`Hola yo soy, ${persona.name}`)
}

$.get(lukeUrl, opts, onPeopleResponse)
