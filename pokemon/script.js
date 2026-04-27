  const exe1 = document.getElementById("1")
  const exe2 = document.getElementById("2")
  const input1 = document.getElementById("poke1")
  const input2 = document.getElementById("poke2")
  const botao = document.getElementById("submit")

botao.addEventListener("click", () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${poke1.value}`)
    .then(res => res.json())
    .then(data => {
      exe1.src = data.sprites.front_default
      console.log(data)
    })
  fetch(`https://pokeapi.co/api/v2/pokemon/${poke2.value}`)
    .then(res => res.json())
    .then(data => {
      exe2.src = data.sprites.back_default
      console.log(data)
    })
})