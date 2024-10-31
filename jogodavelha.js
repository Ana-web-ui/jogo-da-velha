const mesa = document.querySelector("#mesa");
const JOGADOR_BOLA = 'JOGADOR_BOLA'
const JOGADOR_XIS = 'JOGADOR_XIS'
let jogadorAtual = JOGADOR_BOLA
const x = '<div class="text-3xl text-blue-500">X</div>'
const o = '<div class="text-3xl text-red-500">O</div>'

mesa.addEventListener("click", (event) => {
  console.log(event.target);
  const quadrado = event.target;
  //TO DO: 1:verificar se tem algo dentro do quadrado 
  //2: verificar quem é o jogador atual
  //3: Se estiver vazio, adicione o/x e muda qual é o jogador atual
  //BONUS: identificar quando o jogo acabar e mostrar o vencedor 
  
});
