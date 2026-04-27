const turma = document.getElementById("turma")
const atividade = document.getElementById("atividade")
const jogo = document.getElementById("jogo")

const container = document.getElementById("container")

turma.textContent = objeto.nomeTurma
atividade.textContent = objeto.tituloAtividade
jogo.textContent = objeto.nomeJogo

for(let i in objeto.herois){
  container.innerHTML += objeto.obterDados(i)
}
