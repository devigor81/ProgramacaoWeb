const btPlayer1 = document.getElementById('btPlayer1')
const btPlayer2 = document.getElementById('btPlayer2')
const resultadoDadoPlayer1 = document.getElementById('resultadoDadoPlayer1')
const resultadoDadoPlayer2 = document.getElementById('resultadoDadoPlayer2')
const rodadas = document.getElementById('rodadas')
const vitoriaRodadaPlayer1 = document.getElementById('vitoriaRodadaPlayer1')
const vitoriaRodadaPlayer2 = document.getElementById('vitoriaRodadaPlayer2')
const btReiniciar = document.getElementById('btReiniciar')
const empates = document.getElementById('empates')

resultadoDadoPlayer1.innerHTML = localStorage.getItem('resultadoDadoPlayer1')
resultadoDadoPlayer2.innerHTML = localStorage.getItem('resultadoDadoPlayer2')

vitoriaRodadaPlayer1.innerHTML =
  isNaN(localStorage.getItem('vitoriaRodadaPlayer1')) ||
  localStorage.getItem('vitoriaRodadaPlayer2') === null
    ? '0'
    : localStorage.getItem('vitoriaRodadaPlayer1')
vitoriaRodadaPlayer2.innerHTML =
  isNaN(localStorage.getItem('vitoriaRodadaPlayer2')) ||
  localStorage.getItem('vitoriaRodadaPlayer2') === null
    ? '0'
    : localStorage.getItem('vitoriaRodadaPlayer2')

empates.innerHTML =
  isNaN(localStorage.getItem('empates')) ||
  localStorage.getItem('empates') === null
    ? '0'
    : localStorage.getItem('empates')
console.log(localStorage.getItem('empates'))

rodadas.innerHTML =
  isNaN(localStorage.getItem('rodadas')) ||
  localStorage.getItem('rodadas') === null
    ? '0'
    : localStorage.getItem('rodadas')

btPlayer1.disabled = new Boolean(localStorage.getItem('btPlayer1'))
btPlayer2.disabled = new Boolean(localStorage.getItem('btPlayer2'))

if (localStorage.getItem('btPlayer1') === null) {
  btPlayer1.disabled = false
  btPlayer2.disabled = true
} else if (localStorage.getItem('btPlayer1') === 'false') {
  btPlayer1.disabled = false
  btPlayer2.disabled = true
} else {
  btPlayer1.disabled = true
  btPlayer2.disabled = false
}

const girarDadoPlayer1 = () => {
  resultadoDadoPlayer1.innerHTML = localStorage.getItem('resultadoDadoPlayer1')

  if (Number(rodadas.innerHTML) === 10) {
    validarVitoriaPartida()
    return partidaPadrao()
  }

  const aleatorio = Math.floor(Math.random() * 6) + 1

  resultadoDadoPlayer1.innerHTML = aleatorio
  localStorage.setItem('resultadoDadoPlayer1', aleatorio)
  btPlayer1.disabled = true
  btPlayer2.disabled = false

  localStorage.setItem('btPlayer1', Boolean(true))
  localStorage.setItem('btPlayer2', Boolean(false))
}

const girarDadoPlayer2 = () => {
  const aleatorio = Math.floor(Math.random() * 6) + 1
  resultadoDadoPlayer2.innerHTML = Number(aleatorio)
  localStorage.setItem('resultadoDadoPlayer2', aleatorio)
  btPlayer1.disabled = false
  btPlayer2.disabled = true

  localStorage.setItem('btPlayer1', Boolean(false))
  localStorage.setItem('btPlayer2', Boolean(true))

  validarVitoriaRodada()

  const rodadaAnterior = rodadas.innerHTML

  rodadas.innerHTML = Number(rodadaAnterior) + 1
  localStorage.setItem('rodadas', Number(rodadaAnterior) + 1)

  console.log(rodadas.innerHTML)
}

const validarVitoriaRodada = () => {
  if (
    Number(resultadoDadoPlayer1.innerHTML) >
    Number(resultadoDadoPlayer2.innerHTML)
  ) {
    let contagemAnterior = vitoriaRodadaPlayer1.innerHTML
    vitoriaRodadaPlayer1.innerHTML = Number(contagemAnterior) + 1
    localStorage.setItem('vitoriaRodadaPlayer1', Number(contagemAnterior) + 1)
  } else if (
    Number(resultadoDadoPlayer1.innerHTML) <
    Number(resultadoDadoPlayer2.innerHTML)
  ) {
    let contagemAnterior = vitoriaRodadaPlayer2.innerHTML
    vitoriaRodadaPlayer2.innerHTML = Number(contagemAnterior) + 1
    localStorage.setItem('vitoriaRodadaPlayer2', Number(contagemAnterior) + 1)
  } else {
    let contagemAnterior = empates.innerHTML
    empates.innerHTML = Number(contagemAnterior) + 1
    localStorage.setItem('empates', Number(contagemAnterior) + 1)
  }
}

const validarVitoriaPartida = () => {
  if (
    Number(vitoriaRodadaPlayer1.innerHTML) >
    Number(vitoriaRodadaPlayer2.innerHTML)
  ) {
    alert('Jogador 1 venceu a partida!')
  } else if (
    Number(vitoriaRodadaPlayer1.innerHTML) <
    Number(vitoriaRodadaPlayer2.innerHTML)
  ) {
    alert('Jogador 2 venceu a partida!')
  } else if (
    Number(vitoriaRodadaPlayer1.innerHTML) ===
    Number(vitoriaRodadaPlayer2.innerHTML)
  ) {
    alert('A partida terminou empatada!')
  }
}

const partidaPadrao = () => {
  rodadas.innerHTML = 0
  localStorage.setItem('rodadas', '0')

  vitoriaRodadaPlayer1.innerHTML = 0
  localStorage.setItem('vitoriaRodadaPlayer1', '0')

  vitoriaRodadaPlayer2.innerHTML = 0
  localStorage.setItem('vitoriaRodadaPlayer2', '0')

  empates.innerHTML = 0
  localStorage.setItem('empates', '0')

  resultadoDadoPlayer1.innerHTML = ''
  localStorage.setItem('resultadoDadoPlayer1', '')

  resultadoDadoPlayer2.innerHTML = ''
  localStorage.setItem('resultadoDadoPlayer2', '')

  btPlayer1.disabled = false
  localStorage.setItem('btPlayer1', Boolean(false))

  btPlayer2.disabled = true
  localStorage.setItem('btPlayer2', Boolean(true))
}

btPlayer1.onclick = girarDadoPlayer1
btPlayer2.onclick = girarDadoPlayer2
btReiniciar.onclick = partidaPadrao
