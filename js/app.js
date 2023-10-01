let btn = document.querySelector("#btn");

let colecaoNomes = [];

function cadastrar(evento) {
  evento.preventDefault();
  let nome = document.querySelector("#nome").value;

  if (nome.trim() !== "" && nome !== null) {
    colecaoNomes.push(nome.trim());
  } else {
    alert("Digite um nome válido");
  }

  console.log(colecaoNomes);
  limpar();
  exibir();
}

function exibir() {
  let div = document.querySelector("#nomesCadastrados");
  div.innerHTML = "";
  for (let i = 0; i < colecaoNomes.length; i++) {
    if(i%2==0)
        div.innerHTML += `<p class="alert alert-danger">${colecaoNomes[i]}</p>`;
    else
        div.innerHTML += `<p class="alert alert-warning">${colecaoNomes[i]}</p>`;
  }
}

function limpar() {
  document.getElementById("nome").value = ""; //limpa o input de texto quando clicado no botão Limpar
}

btn.addEventListener("click", cadastrar);
