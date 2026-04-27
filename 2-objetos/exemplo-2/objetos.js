let nome = document.getElementById("nome")
let bio = document.getElementById("bio")
let seguidores = document.getElementById("seguidores")
const adicionar = document.getElementById("add")

const perfil = {
  nome: "Matheus",
  bio: "informático",
  seguidores: 21,
  seguir() {
    this.seguidores ++
  }
}

nome.textContent = perfil.nome
bio.textContent = perfil.bio
seguidores.textContent = perfil.seguidores

adicionar.addEventListener("click", () => {
  perfil.seguir()
  seguidores.textContent = perfil.seguidores
  adicionar.style.display = "none"
})