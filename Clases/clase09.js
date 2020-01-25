var x = 4, y = '4'

var Nicolas = {
  nombre: 'Nicolas'
}

var otraPersona = {
  nombre: 'Nicolas'
}
//son distintos aunque se desglose nicolas dentro de otra persona
/* var otraPersona = {
    ...Nicolas
} */
if(x==y){
    console.log("Son iguales");
}
if(x===y){
    console.log("Son distintos ya que x es un numero e y es un string");
}
if(Nicolas==otraPersona){
    console.log("Son distintos ya que son objetos distintos y tienen distinta referencia");
}
if(Nicolas===otraPersona){
    console.log("Son distintos ya que son objetos distintos");
}