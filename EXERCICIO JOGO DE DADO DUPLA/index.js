const btPlayer1 = document.getElementById('btPlayer1');
const btPlayer2 = document.getElementById('btPlayer2');
const resultadoDadoPlayer1 = document.getElementById('resultadoDadoPlayer1');
const resultadoDadoPlayer2 = document.getElementById('resultadoDadoPlayer2');
const rodadas = document.getElementById('rodadas');
const vitoriaRodadaPlayer1 = document.getElementById('vitoriaRodadaPlayer1');
const vitoriaRodadaPlayer2 = document.getElementById('vitoriaRodadaPlayer2');
const btReiniciar = document.getElementById('btReiniciar');
const empates = document.getElementById('empates');

const girarDadoPlayer1 = () => {

  if(Number(rodadas.innerHTML) === 10) {
    
    validarVitoriaPartida();
    return partidaPadrao();

  }
  
  const aleatorio = Math.floor(Math.random() * 6) + 1;
  resultadoDadoPlayer1.innerHTML = Number(aleatorio);
  btPlayer1.disabled = true;
  btPlayer2.disabled = false;
}

const girarDadoPlayer2 = () => {

  const aleatorio = Math.floor(Math.random() * 6) + 1;
  resultadoDadoPlayer2.innerHTML = Number(aleatorio);
  btPlayer1.disabled = false;
  btPlayer2.disabled = true;

  validarVitoriaRodada();
  
  const rodadaAnterior = rodadas.innerHTML;

  rodadas.innerHTML = Number(rodadaAnterior) + 1;

  console.log(rodadas.innerHTML);


}

const validarVitoriaRodada = () => {

  if(Number(resultadoDadoPlayer1.innerHTML) > Number(resultadoDadoPlayer2.innerHTML)) {
    
    let contagemAnterior = vitoriaRodadaPlayer1.innerHTML;
    vitoriaRodadaPlayer1.innerHTML = Number(contagemAnterior) + 1;

  }
  else if(Number(resultadoDadoPlayer1.innerHTML) < Number(resultadoDadoPlayer2.innerHTML)) {

    let contagemAnterior = vitoriaRodadaPlayer2.innerHTML;
    vitoriaRodadaPlayer2.innerHTML = Number(contagemAnterior) + 1;

  }
  else {
    let contagemAnterior = empates.innerHTML;
    empates.innerHTML = Number(contagemAnterior) + 1;
  }
  
}

const validarVitoriaPartida = () => {
  
  if(Number(vitoriaRodadaPlayer1.innerHTML) > Number(vitoriaRodadaPlayer2.innerHTML)) {
    alert('Jogador 1 venceu a partida!')
  }
  else if(Number(vitoriaRodadaPlayer1.innerHTML) < Number(vitoriaRodadaPlayer2.innerHTML)) {
    alert('Jogador 2 venceu a partida!');
  }
  else if(Number(vitoriaRodadaPlayer1.innerHTML) === Number(vitoriaRodadaPlayer2.innerHTML)) {
    alert('A partida terminou empatada!');
  }

}

const partidaPadrao = () => {
  rodadas.innerHTML = 0;
  vitoriaRodadaPlayer1.innerHTML = 0;
  vitoriaRodadaPlayer2.innerHTML = 0;
  empates.innerHTML = 0;
  resultadoDadoPlayer1.innerHTML = '';
  resultadoDadoPlayer2.innerHTML = '';
  btPlayer1.disabled = false;
  btPlayer2.disabled = true;
}

btPlayer1.onclick = girarDadoPlayer1;
btPlayer2.onclick = girarDadoPlayer2;
btReiniciar.onclick = partidaPadrao;