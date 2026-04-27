const nome = document.getElementById("nome");
const resp = document.getElementById("resp");
const quantidade = document.getElementById("quantidade");
const escola = document.getElementById("escola");
const total = document.getElementById("total");

function NomeResponsavel() {
  nome.textContent = `Nome: ${sistemaLab.nome}`;
  resp.textContent = `Resposável: ${sistemaLab.responsavel}`;
}

NomeResponsavel();

quantidade.innerText = `Quantidade de equipamentos: ${sistemaLab.contarEquipamentos()}`;

escola.textContent = `Escola: ${sistemaLab.escola}`;
total.textContent = `Total de equipamentos no Lab: ${sistemaLab.contarEquipamentos()}`;

function cards() {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";

  sistemaLab.equipamentos.forEach((item) => {
    const saude = sistemaLab.verificarSaude(item.horasUso);
    cards.innerHTML += `
      <div class="container">
        <h3>${item.tipo}</h3>
        <p>Marca: ${item.marca}</p>
        <p>Uso: ${item.horasUso}</p>
        <p>Saúde: ${saude}</p>

      </div>
    `;
  });
}

cards();
