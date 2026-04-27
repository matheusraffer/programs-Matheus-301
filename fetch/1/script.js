const input = document.getElementById("input")
const submit = document.getElementById("submit")
const lista = document.getElementById("lista")
const body = document.getElementById("body")


function buscar() {
  fetch("https://api.github.com/users/" + input.value)
  .then(res => res.json())
  .then(data => {
    let div1 = document.createElement("div")

    let id = document.createElement("p")
    id.textContent = "Id: #" + data.id

    let repositorios = document.createElement("p")
    repositorios.textContent = "Quantidade de Repositorios: " + data.public_repos
    
    let avatar = document.createElement("img")
    avatar.src = data.avatar_url

    div1.appendChild(avatar)
    div1.appendChild(id)
    div1.appendChild(repositorios)

    document.body.appendChild(div1)

    







    console.log(data)
  })
}
