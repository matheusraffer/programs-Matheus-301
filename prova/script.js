const dashboard = document.getElementById("dashboard")
const usuario = document.getElementById("nome-usuario")
const moedabase = document.getElementById("info-moeda")

for(let i in minhaCarteira.ativos){
  dashboard.innerHTML += minhaCarteira.prepararCard(i)
}
usuario.innerHTML = minhaCarteira.usuario
moedabase.innerHTML += minhaCarteira.moedaBase