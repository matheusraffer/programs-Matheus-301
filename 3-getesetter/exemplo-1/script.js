const heroi = {
  nome: "King Arthur",
  _hp: 100,

  set hp(valor) {
    if(valor < 0){
      console.warn("O hp do personagem não pode ser negativo, alterado para 0")
      this._hp = 0
    } else {
      this._hp = valor
    }
  },

  get hp() {
    return this._hp + "HP"
  }
}

const teste = 21312