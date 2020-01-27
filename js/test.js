

const celeste = document.getElementById('celeste')
const verde = document.getElementById('verde')
const naranja = document.getElementById('naranja')
const violeta = document.getElementById('violeta')


const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10



class Juego {

  constructor() {

      this.inicializar = this.inicializar.bind(this)
      this.inicializar()
      this.generarSecuencia()
      setTimeout(this.siguienteNivel(), 600)


  }

  inicializar() {
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.elegirColor = this.elegirColor.bind(this) // bind, se usa para atar el this a this de classe Juego
    this.detenerMusica = this.detenerMusica.bind(this)
    this.toggleBtnEmpezar()
    this.nivel = 1
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    }
  }

  reproducirMusica(musica) {

   var track = document.getElementById(musica)
   track.play()
 }

 empezarMusica() {
   var musica = document.getElementById('musicaFondo')
   musica.loop = true
   musica.play()
 }

 detenerMusica () {
   var musica = document.getElementById('musicaFondo')
   musica.loop = false
   musica.pause()
   musica.currentTime = 0

 }


  toggleBtnEmpezar() {
    if (btnEmpezar.classList.contains('hide')) {
      btnEmpezar.classList.remove('hide')
    } else {
      btnEmpezar.classList.add('hide')
      this.empezarMusica()
    }
  }

  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  siguienteNivel() {
    this.subnivel = 0
    this.iluminarSecuencia()
    this.agregarEventosclick()

  }

  transformarNumeroAColor(numero) {
    switch (numero) {
      case 0:
        return 'celeste'
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3:
        return 'verde'
    }
  }

  transformarColorANumero(color) {
    switch (color) {
      case 'celeste':
        return 0
      case 'violeta':
        return 1
      case 'naranja':
        return 2
      case 'verde':
        return 3
    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i])
      setTimeout(() => this.iluminarColor(color),1400 * i)



    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 400)
    this.reproducirMusica('track')
  }



apagarColor(color) {
  this.colores[color].classList.remove('light')

}

agregarEventosclick() {
  this.colores.celeste.addEventListener('click', this.elegirColor)
  this.colores.verde.addEventListener('click', this.elegirColor)
  this.colores.violeta.addEventListener('click', this.elegirColor)
  this.colores.naranja.addEventListener('click', this.elegirColor)
}

eliminarEventosCLick() {
  this.colores.celeste.removeEventListener('click', this.elegirColor)
  this.colores.verde.removeEventListener('click', this.elegirColor)
  this.colores.violeta.removeEventListener('click', this.elegirColor)
  this.colores.naranja.removeEventListener('click', this.elegirColor)
}


elegirColor(ev) {
  const nombreColor = ev.target.dataset.color
  const numeroColor = this.transformarColorANumero(nombreColor)
  this.iluminarColor(nombreColor)
  if (numeroColor === this.secuencia[this.subnivel]) {
    this.subnivel++
    if (this.subnivel ===  this.nivel) {
      this.nivel++
       this.eliminarEventosCLick()
      if (this.nivel === (ULTIMO_NIVEL + 1)) {
        this.ganoEljuego()
      } else {
        setTimeout(this.siguienteNivel, 1500)
      }
    }
  } else {
    this.perdioEljuego()
  }
}

ganoEljuego () {
  swal('Simon Says', 'you win', 'success')
  .then(this.inicializar)
}

perdioEljuego () {

  this.detenerMusica()
  swal('Simon Says', 'you lose', 'error')
  .then( () => {

    this.eliminarEventosCLick()
    this.inicializar()
  })
}

}



function empezarJuego() {
  window.juego = new Juego
}