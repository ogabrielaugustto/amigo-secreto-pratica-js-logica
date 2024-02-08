let listaNomes = [];
let boxSorteio = document.getElementById("lista-sorteio");
let inputNome = document.getElementById("nome-amigo");
let boxListaNome = document.getElementById("lista-amigos");

function adicionar() {
  if (inputNome.value == '') {
    alert('Informe um nome!')
    return;
  }
  if (listaNomes.includes(inputNome.value)) {
    alert('Nomes repitidos não são permitidos!');
    return;
  }
  listaNomes.push(inputNome.value);
  boxListaNome.textContent = listaNomes;
  inputNome.value = "";
}

function sortear() {
  totalNomes = listaNomes.length;

  if (totalNomes < 4) {
    alert('Insira no minimo 4 nomes!')
    return
  }

  if (totalNomes % 2 != 0) {
    alert("A quantidade de nomes total precisa ser PAR!");
    return;
  } else {
    listaNomes.sort();
    for (let index = 1; index < listaNomes.length; index = index + 2) {
        let element1 = listaNomes[index];
        let element2 = listaNomes[index - 1];
        boxSorteio.innerHTML = boxSorteio.innerHTML + `${element1} --> ${element2} <br>`;
    }
  }
}

function reiniciar() {
  inputNome.textContent = listaNomes = [];
  boxSorteio.textContent = "";
  boxListaNome.textContent = "";
}